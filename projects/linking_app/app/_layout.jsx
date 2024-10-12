import { useEffect } from "react";
import { Stack } from "expo-router";
import * as Linking from "expo-linking";
import { connectToDevTools } from "react-devtools-core";

export default function Layout() {
  useEffect(() => {
    if (__DEV__) {
      connectToDevTools({
        host: "localhost",
        port: 8097,
      });
    }
    const handleDeepLink = async (url) => {
      const { path, queryParams } = Linking.parse(url);
      // Navigate based on path, for example:
      if (path.startsWith("details")) {
        const id = queryParams.id; // Extract parameters as needed
        // Navigate to the details screen
      }
    };

    const subscription = Linking.addEventListener("url", ({ url }) =>
      handleDeepLink(url)
    );

    // Handle the initial URL if the app is opened from a link
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink(url);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <Stack />;
}
