// ✅ Force Node runtime (PREVENTS Edge + Turbopack crash)
export const runtime = "nodejs";

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// ✅ Initialize Firebase Admin SDK safely
function initFirebaseAdmin() {
  // Prevent double initialization during hot reload
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID as string,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ?.replace(/\\n/g, "\n")
          .trim(),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

// ✅ Export instances
export const { auth, db } = initFirebaseAdmin();
