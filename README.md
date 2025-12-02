# book-share-rn

A React Native application for sharing books.

## Installation

To install dependencies:

```bash
npm install --legacy-peer-deps
```

**Important Note**: The `--legacy-peer-deps` flag is required due to peer dependency conflicts between `aws-amplify-react-native@6.0.8` (which requires GraphQL 14.x/15.x) and other packages. This flag tells npm to use the legacy peer dependency resolution algorithm from npm v6.

While this bypasses some of npm's peer dependency checks, it is necessary for this project's dependency configuration. The security fixes applied via npm overrides ensure that vulnerable packages are updated to secure versions despite this flag.

## Security

For information about dependency security status and fixes, see [DEPENDENCY_REPORT.md](./DEPENDENCY_REPORT.md).

## Running the App

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Start Metro Bundler
```bash
npm start
```

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```
