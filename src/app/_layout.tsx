// import { ClerkProvider } from "@clerk/clerk-expo";
// import { tokenCache } from "@clerk/clerk-expo/token-cache";
// import { Stack } from "expo-router";
// import "../../global.css";

// import ChatWrapper from "@/components/ChatWrapper";
// import VideoProvider from "@/components/VideoProvider";
// import { AppProvider } from "@/contexts/AppProvider";
// import * as Sentry from "@sentry/react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// Sentry.init({
//   dsn: "https://4cbf0be15075fc50561c2e10fa33fc85@o4509813037137920.ingest.de.sentry.io/4510905593823312",

//   // Adds more context data to events (IP address, cookies, user, etc.)
//   // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
//   sendDefaultPii: true,

//   // Enable Logs
//   enableLogs: true,

//   // Configure Session Replay
//   replaysSessionSampleRate: 1,
//   replaysOnErrorSampleRate: 1,
//   integrations: [
//     Sentry.mobileReplayIntegration({
//       maskAllImages: false,
//       maskAllVectors: false,
//       maskAllText: false,
//     }),
//   ],

//   // uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // spotlight: __DEV__,
// });

// export default function RootLayout() {
//   return (
//     <ClerkProvider tokenCache={tokenCache}>
//       <GestureHandlerRootView className="flex-1">
//         <ChatWrapper>
//           <VideoProvider>
//             <AppProvider>
//               <Stack screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="(auth)" />
//                 <Stack.Screen name="(tabs)" />
//               </Stack>
//             </AppProvider>
//           </VideoProvider>
//         </ChatWrapper>
//       </GestureHandlerRootView>
//     </ClerkProvider>
//   );
// }



import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import "../../global.css";

import ChatWrapper from "@/components/ChatWrapper";
import VideoProvider from "@/components/VideoProvider";
import { AppProvider } from "@/contexts/AppProvider";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const clerkKey = Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY;


export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={clerkKey}
      tokenCache={tokenCache}>
      <GestureHandlerRootView className="flex-1">
        <ChatWrapper>
          <VideoProvider>
            <AppProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(tabs)" />
              </Stack>
            </AppProvider>
          </VideoProvider>
        </ChatWrapper>
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}