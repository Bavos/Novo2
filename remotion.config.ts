import {Config} from 'remotion';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setCodec('h264');
Config.setPixelFormat('yuv420p');

// Configurações globais alinhadas à composição principal vertical.
Config.setChromiumOpenGlRenderer('angle');
