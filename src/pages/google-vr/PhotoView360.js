import React from 'react';
import NativeTachyons from 'react-native-style-tachyons';
import { GLView } from 'expo';
import ExpoTHREE, { THREE } from 'expo-three';
import PinchZoomResponder from 'react-native-pinch-zoom-responder';

THREE.suppressExpoWarnings(true);

NativeTachyons.wrap
export default class PhotoView360 extends React.Component {
  constructor(props) {
    super(props);
    this.lat = 0;
    this.lon = 0;
    this.latOnTap = 0;
    this.lonOnTap = 0;
    this.locationXStart = null;

    this._panResponder = new PinchZoomResponder({
      onPinchZoomStart: e => {
        this.cameraFov = this.camera.fov;
      },
      onResponderMove: (e, gestureState) => {
        if (gestureState) {
          const { scaleX, scaleY } = gestureState;
          const scale = Math.sqrt(scaleX * scaleX + scaleY * scaleY);
          const fov = this.cameraFov / Math.max(0, scale - 0.4);
          this.camera.fov = THREE.Math.clamp(fov, 10, 75);
          this.camera.updateProjectionMatrix();
        }
      }
    });
    const { onResponderGrant, onResponderMove, onResponderRelease } = this._panResponder.handlers;
    this._panResponder.handlers.onResponderGrant = e => {
      if (e.nativeEvent.touches.length === 1) {
        this.latOnTap = this.lat;
        this.lonOnTap = this.lon;
        this.locationXStart = e.nativeEvent.touches[0].locationX;
        this.locationYStart = e.nativeEvent.touches[0].locationY;
      } else {
        onResponderGrant(e);
      }
    };
    this._panResponder.handlers.onResponderMove = e => {
      if (e.nativeEvent.touches.length === 1) {
        if (this.locationXStart !== null) {
          const factor = this.camera.fov / 75 * 0.1;
          this.lon = this.lonOnTap - (e.nativeEvent.touches[0].locationX - this.locationXStart) * factor;
          this.lat = this.latOnTap + (e.nativeEvent.touches[0].locationY - this.locationYStart) * factor;
        }
      } else {
        onResponderMove(e);
      }
    };
    this._panResponder.handlers.onResponderRelease = e => {
      this.locationXStart = null;
      onResponderRelease(e);
    };
  }

  render() {
    return pug`
      GLView.flx-i(
        ...this._panResponder.handlers
        onContextCreate=${async gl => {
          const scene = new THREE.Scene();
          const renderer = new ExpoTHREE.Renderer({ gl });
          const geometry = new THREE.SphereBufferGeometry(500, 60, 40);
          const material = new THREE.MeshBasicMaterial({
            map: await ExpoTHREE.loadTextureAsync({ asset: this.props.assetUri })
          });
          const mesh = new THREE.Mesh(geometry, material);
          renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
          geometry.scale(1, 1, -1);
          scene.add(mesh);
          this.camera = new THREE.PerspectiveCamera(
            75,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            1,
            1100
          );
          this.camera.target = new THREE.Vector3(0, 0, 0);
          let phi = 0;
          let theta = 0;
          const animate = () => {
            requestAnimationFrame(animate);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            phi = THREE.Math.degToRad(90 - this.lat);
            theta = THREE.Math.degToRad(this.lon);
            this.camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
            this.camera.target.y = 500 * Math.cos(phi);
            this.camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
            this.camera.lookAt(this.camera.target);
            renderer.render(scene, this.camera);
            gl.endFrameEXP();
          }
          animate();
        }}
      )
    `;
  }
}
