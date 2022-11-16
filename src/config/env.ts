const config = {
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    senderId: process.env.NEXT_PUBLIC_MESSAGIN_SENDERID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    messurementId: process.env.NEXT_PUBLIC_MEASSUREMENT_ID,
  },
};

export default config;
