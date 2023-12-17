import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.urlmanager.app',
  appName: 'url-manager',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
