import { Box, Logo, GradientText, Spacer, Text, Code } from "@fuegokit/react";

const WelcomeBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        flex: 1,
        backgroundColor: "elevation.surface.default.[default]",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "elevation.surface.default.[default]",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: "4",
            width: "100%",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            gap: 2,
            borderRadius: 1,
            border: "1px solid",
            borderColor: "border.default",
            backgroundColor: "elevation.surface.default.[default]",
          }}
        >
          <Box sx={{ color: "icon.default" }}>
            <Logo variant="gradient" size={16} />
          </Box>
          <GradientText
            as="p"
            gradientTo={`#1FDA96 `}
            gradientFrom={`#3FB3F2`}
            gradientDirection={`left`}
            fallbackColor={`#3FB3F2`}
          >
            Forge + Fuegokit 3.0 + Vite
          </GradientText>
        </Box>
        <Spacer size={24} axis={`vertical`} />
        <Text as="p" sx={{ color: "text.default" }}>
          Fuegokit 3.13.1, Vite, Forge, <Code>jira:issuePanel</Code>
        </Text>
      </Box>
    </Box>
  );
};
export default WelcomeBanner;
