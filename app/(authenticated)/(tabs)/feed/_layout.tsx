import Screen from '@/src/UI/Screen';
import { useTheme } from '@/src/theme/ThemeContext';
import { Stack } from 'expo-router';

export default function FeedStack() {
  const { colors, isDark } = useTheme();
  return (
    <Screen
      preset="auto"
      safeAreaEdges={['top']}
      backgroundColor={colors.background}
      contentContainerStyle={{
        flex: 1,
      }}
      statusBarStyle={isDark ? 'light' : 'dark'}
    >
      <Stack
        screenOptions={{
          headerShown: false, // Show header to include back button
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </Screen>
  );
}
