# React Native Upgrade Guide

## Overview

This document provides guidance for upgrading React Native to address the remaining 5 high severity security vulnerabilities related to the `ip` package.

## Current Situation

- **Current Version**: React Native 0.70.4
- **Target Version**: React Native 0.82.1 or later
- **Vulnerabilities**: 5 high severity issues in the `ip` package used by React Native CLI

## Remaining Vulnerabilities

All remaining vulnerabilities are in the `ip` package (CVE GHSA-2p57-rm9w-gvfp):
- SSRF (Server-Side Request Forgery) improper categorization in `isPublic` method
- Affects development/build tooling, not production runtime

**Affected Packages**:
- `@react-native-community/cli-doctor`
- `@react-native-community/cli-hermes`
- `@react-native-community/cli`
- `react-native`

## Why Not Fixed Immediately

1. **Breaking Changes**: React Native 0.70.4 → 0.82.1 is a significant upgrade with multiple breaking changes
2. **Development-Only Impact**: The vulnerability affects CLI tools, not production app runtime
3. **Low Exploitability**: Requires access to development environment and specific network configurations
4. **Testing Required**: Extensive testing needed to ensure app functionality after upgrade

## Upgrade Steps

When ready to perform the upgrade, follow these steps:

### 1. Review React Native Upgrade Helper
Visit: https://react-native-community.github.io/upgrade-helper/?from=0.70.4&to=0.82.1

This tool shows all file changes needed between versions.

### 2. Update package.json

```json
{
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.82.1"
  }
}
```

### 3. Update Native Dependencies

#### iOS
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

#### Android
Review and update:
- `android/build.gradle`
- `android/app/build.gradle`
- `android/gradle/wrapper/gradle-wrapper.properties`

### 4. Address Breaking Changes

Key areas to review:
- New Architecture preparation (optional in 0.82)
- Metro bundler configuration changes
- Gradle and build tool updates
- iOS minimum deployment target changes
- Flipper debugging tool updates

### 5. Update Related Dependencies

Some packages may need updates for React Native 0.82 compatibility:
- `@react-navigation/native`
- `@react-navigation/stack`
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `react-native-safe-area-context`

### 6. Test Thoroughly

- Build for both iOS and Android
- Test all app features
- Test navigation flows
- Test third-party integrations (AWS Amplify, etc.)
- Perform regression testing

## Alternative: Isolated CLI Update

If a full React Native upgrade is not feasible, you can try updating just the CLI:

```bash
npm install --save-dev @react-native-community/cli@latest --legacy-peer-deps
```

**Note**: This may cause compatibility issues and is not officially supported.

## Risk Assessment

### Current Risk Level: **LOW to MEDIUM**

**Justification**:
- Vulnerability is in development tooling, not production code
- Requires access to development environment to exploit
- SSRF attack requires specific network configuration
- No known active exploits targeting this specific issue

### Upgrade Risk Level: **MEDIUM to HIGH**

**Justification**:
- Major version upgrade with potential breaking changes
- Requires significant testing effort
- May break existing functionality if not done carefully
- Native code changes required (iOS/Android)

## Recommendation

**Defer the React Native upgrade** until:
1. Time can be allocated for proper testing
2. A dedicated migration sprint can be scheduled
3. All stakeholders are aware of potential breaking changes

**Current setup is acceptable** because:
1. 93% of vulnerabilities have been fixed (67 out of 72)
2. Remaining vulnerabilities have low practical impact
3. Development environment can be secured through other means

## Timeline Suggestion

- **Q1 2025**: Plan and schedule React Native upgrade
- **Q2 2025**: Execute upgrade in development environment
- **Q2 2025**: Complete testing and deploy to production

## References

- [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/)
- [React Native 0.82 Release Notes](https://github.com/facebook/react-native/releases/tag/v0.82.0)
- [IP Package Vulnerability Details](https://github.com/advisories/GHSA-2p57-rm9w-gvfp)
