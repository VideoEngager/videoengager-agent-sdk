<p align="center">
  <a href="https://www.videoengager.com/integrations/open-api-platform/open-apis" target="_blank" align="center" alt="Go to VideoEngager website">
    <img width="250" src="./public/logo-5x.png" alt="VideoEngager logo">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/videoengager-agent-sdk">
    <img src="https://img.shields.io/npm/v/videoengager-agent-sdk.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/videoengager-agent-sdk">
    <img src="https://img.shields.io/npm/dm/videoengager-agent-sdk.svg" alt="npm downloads" />
  </a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg" alt="TypeScript Ready" />

</p>

# VideoEngager Agent SDK

Enterprise-grade SDK for integrating video calling capabilities for VideoEngager agents into your applications. This SDK provides a seamless way to embed video calling capabilities with support for multiple authentication providers and comprehensive event handling.

## 🚀 Quick Start

### Installation

```bash
# Using npm
npm install videoengager-agent-sdk

# Using yarn
yarn add videoengager-agent-sdk

# Using pnpm
pnpm add videoengager-agent-sdk
```

### Basic Usage

```typescript
import { init, call, on } from 'videoengager-agent-sdk';

// Initialize the SDK
await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com'
});

// Listen for session events
on('sessionStarted', (callState) => {
  console.log('Video session started:', callState.visitorId);
});

on('sessionEnded', (callState) => {
  console.log('Video session ended');
});

// Start a video call
await call({ customerId: 'customer-123' });
```

### CDN Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>VideoEngager Integration</title>
</head>
<body>
  <!-- VideoEngager will inject the widget here -->
  <div id="video-engager-container"></div>
  
  <script src="https://cdn.videoengager.com/agent/latest/index.js"></script>
  <script>
    async function initializeVideoEngager() {
      await VideoEngagerAgent.init({
        authMethod: 'generic',
        apiKey: 'your-api-key', 
        domain: 'your-domain.videome.leadsecure.com',
        agentEmail: 'agent@yourcompany.com'
      });
      
      // Start a call
      await VideoEngagerAgent.call({ customerId: 'customer-123' });
    }
    
    initializeVideoEngager().catch(console.error);
  </script>
</body>
</html>
```

## 📖 API Reference

### Initialization

#### `init(options)`

Initializes the VideoEngager Agent with the provided configuration.

```typescript
import { init } from 'videoengager-agent-sdk';

await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com',
  organizationId: 'your-org-id', // Optional
  options: {
    containerId: 'custom-container-id', // Optional, default: 'video-engager-container'
    uiHandlers: customHandlers // Optional, for custom UI implementation
  }
});
```

**Parameters:**
- `authMethod`: Authentication method (`'generic'`, `'genesys'`, or `'custom'`)
- `domain`: VideoEngager domain
- `apiKey`: Your API key (required for generic auth)
- `agentEmail`: Agent's email address
- `organizationId`: Organization identifier (optional)
- `options`: Additional configuration options

### Call Management

#### `call(params?)`

Initiates a video call with optional parameters.

```typescript
import { call } from 'videoengager-agent-sdk';

// Start a call without customer ID
await call();

// Start a call with customer ID
await call({ customerId: 'customer-123' });
```

**Parameters:**
- `customerId` (optional): Customer identifier to associate with the call

#### `endCall()`

Ends the current video call and closes the widget.

```typescript
import { endCall } from 'videoengager-agent-sdk';

await endCall();
```

### Instance Management

#### `getInstance()`

Gets the singleton instance of VideoEngager Agent.

```typescript
import { getInstance } from 'videoengager-agent-sdk';

const agent = getInstance();
await agent.call({ customerId: 'customer-123' });
```

#### `isInitialized()`

Checks if the agent is initialized and ready to use.

```typescript
import { isInitialized } from 'videoengager-agent-sdk';

if (isInitialized()) {
  // Safe to make calls
  await call();
} else {
  // Need to initialize first
  await init(config);
}
```

#### `destroy()`

Destroys the agent instance and cleans up all resources. **This operation is not recoverable.**

```typescript
import { destroy } from 'videoengager-agent-sdk';

await destroy(); // Complete cleanup
// After destroy, must call init() again to use the SDK
```

## 🔐 Authentication

The SDK supports multiple authentication methods to integrate with various platforms:

### Generic Authentication

Use this for most integrations with your API key.

```typescript
await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com',
  organizationId: 'your-org-id' // Optional
});
```

**Required:**
- `apiKey`: Your VideoEngager API key
- `domain`: Your VideoEngager domain
- `agentEmail`: Agent's email address

**Optional:**
- `organizationId`: Organization identifier

### Genesys Authentication

For Genesys Cloud integrations.

```typescript
await init({
  authMethod: 'genesys',
  environment: 'mypurecloud.com', // or other Genesys domains
  domain: 'your-domain.videome.leadsecure.com'
});
```

**Required:**
- `environment`: Genesys Cloud environment domain
- `domain`: Your VideoEngager domain

**Supported Genesys Domains:**
- `mypurecloud.com`
- `mypurecloud.de`
- `mypurecloud.ie`
- `mypurecloud.com.au`
- `mypurecloud.jp`
- `inindca.com`
- `pure.cloud`
- `apne2.pure.cloud`
- `apne3.pure.cloud`
- `aps1.pure.cloud`
- `cac1.pure.cloud`
- `euc2.pure.cloud`
- `euw2.pure.cloud`
- `mec1.pure.cloud`
- `sae1.pure.cloud`
- `usw2.pure.cloud`

### Custom Authentication

For advanced integrations with custom authentication logic.

```typescript
await init({
  authMethod: 'custom',
  customAuthFunction: async () => {
    // Your custom authentication logic
    const authData = await yourAuthService.authenticate();
    
    // Option 1: Return pak, agentEmail and environment
    return {
      pak: authData.apiKey,
      agentEmail: authData.email,
      environment: authData.environment
    };
    
    // Option 2: Return token
    return {
      token: authData.token
    };
  },
  domain: 'your-domain.videome.leadsecure.com'
});
```

**Required:**
- `customAuthFunction`: Async function that returns authentication parameters
- `domain`: Your VideoEngager domain

**Authentication Function Return Values:**
The custom authentication function must return an object with either:
- `pak`, `agentEmail`, and `environment` properties, OR
- `token` property

## 📡 Events

The SDK emits events throughout the call lifecycle that you can listen to:

### Event Listeners

#### `on(event, callback)`

Registers an event listener.

```typescript
import { on } from 'videoengager-agent-sdk';

const unsubscribe = on('sessionStarted', (callState) => {
  console.log('Session started:', callState);
});

// Later, unregister the listener
unsubscribe();
```

#### `off(event, callback)`

Removes an event listener.

```typescript
import { off } from 'videoengager-agent-sdk';

const handleSessionStart = (callState) => {
  console.log('Session started:', callState);
};

on('sessionStarted', handleSessionStart);
// Later...
off('sessionStarted', handleSessionStart);
```

### Available Events

#### `sessionStarted`

Emitted when a new video session begins.

```typescript
on('sessionStarted', (callState) => {
  console.log('Session started with visitor:', callState.visitorId);
  console.log('Agent email:', callState.email);
  console.log('Short URL:', callState.shortUrl);
});
```

#### `sessionEnded`

Emitted when a video session ends.

```typescript
on('sessionEnded', (callState) => {
  console.log('Session ended');
  console.log('Final status:', callState.status);
});
```

#### `sessionFailed`

Emitted when a session fails to start.

```typescript
on('sessionFailed', (eventPayload) => {
  console.error('Session failed to start:', eventPayload);
});
```

#### `callStateUpdated`

Emitted whenever the call state changes.

```typescript
on('callStateUpdated', (callState) => {
  console.log('Call status:', callState.status);
  console.log('Active session:', callState.inActiveSession);
  console.log('Attributes:', callState.attributes);
});
```

#### `cleanup`

Emitted when the SDK is being cleaned up.

```typescript
on('cleanup', () => {
  console.log('SDK is being cleaned up');
  // Perform any necessary cleanup in your application
});
```

### Call State Object

All session events provide a `CallState` object with the following properties:

```typescript
type CallState = {
  status: 'NONE' | 'PRE_CALL' | 'CALL_STARTED' | 'END_CALL' | 'FINISHED';
  email: string;              // Agent's email address
  callerEmail: string;        // Caller's email address
  visitorId: string;          // Unique visitor identifier
  pin: string;                // Call PIN number
  shortUrl: string;           // Short URL for the call
  tennant_id: string;         // Tenant ID
  attributes: Record<string, any>; // Additional call attributes
  inActiveSession: boolean;   // Whether there's an active session
};
```

## 🎨 Custom UI Integration

For advanced use cases, you can provide custom UI handlers to control how the VideoEngager widget is displayed:

```typescript
import { init } from 'videoengager-agent-sdk';

const customHandlers = {
  openIframe: async (url, options) => {
    // Custom logic to open iframe in React/Vue/Angular etc.
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '600px';
    iframe.style.border = 'none';
    
    const container = document.getElementById('my-custom-container');
    container.appendChild(iframe);
  },
  
  closeIframe: async (options) => {
    // Custom logic to close iframe
    const container = document.getElementById('my-custom-container');
    const iframe = container.querySelector('iframe');
    if (iframe) {
      iframe.remove();
    }
  },
  
  getIframe: (options) => {
    // Return the current iframe element
    const container = document.getElementById('my-custom-container');
    return container.querySelector('iframe');
  }
};

await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com',
  options: {
    uiHandlers: customHandlers
  }
});
```

### Framework-Specific Examples

#### React Integration

```typescript
import React, { useRef, useEffect } from 'react';
import { init, call, on, off } from 'videoengager-agent-sdk';

const VideoEngagerComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initSDK = async () => {
      await init({
        authMethod: 'generic',
        apiKey: 'your-api-key',
        domain: 'your-domain.videome.leadsecure.com',
        agentEmail: 'agent@yourcompany.com',
        options: {
          uiHandlers: {
            openIframe: async (url) => {
              const iframe = document.createElement('iframe');
              iframe.src = url;
              iframe.style.width = '100%';
              iframe.style.height = '600px';
              iframe.style.border = 'none';
              containerRef.current.appendChild(iframe);
            },
            closeIframe: async () => {
              const iframe = containerRef.current.querySelector('iframe');
              if (iframe) iframe.remove();
            },
            getIframe: () => {
              return containerRef.current.querySelector('iframe');
            }
          }
        }
      });
    };

    initSDK();

    // Event listeners
    const handleSessionStart = (callState) => {
      console.log('Session started:', callState);
    };

    on('sessionStarted', handleSessionStart);

    return () => {
      off('sessionStarted', handleSessionStart);
    };
  }, []);

  const startCall = async () => {
    await call({ customerId: 'customer-123' });
  };

  return (
    <div>
      <button onClick={startCall}>Start Video Call</button>
      <div ref={containerRef} id="video-container" />
    </div>
  );
};
```

#### Vue.js Integration

```vue
<template>
  <div>
    <button @click="startCall">Start Video Call</button>
    <div ref="videoContainer" id="video-container"></div>
  </div>
</template>

<script>
import { init, call, on, off } from 'videoengager-agent-sdk';

export default {
  async mounted() {
    await init({
      authMethod: 'generic',
      apiKey: 'your-api-key',
      domain: 'your-domain.videome.leadsecure.com',
      agentEmail: 'agent@yourcompany.com',
      options: {
        uiHandlers: {
          openIframe: async (url) => {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.style.width = '100%';
            iframe.style.height = '600px';
            iframe.style.border = 'none';
            this.$refs.videoContainer.appendChild(iframe);
          },
          closeIframe: async () => {
            const iframe = this.$refs.videoContainer.querySelector('iframe');
            if (iframe) iframe.remove();
          },
          getIframe: () => {
            return this.$refs.videoContainer.querySelector('iframe');
          }
        }
      }
    });

    on('sessionStarted', this.handleSessionStart);
  },
  
  beforeUnmount() {
    off('sessionStarted', this.handleSessionStart);
  },
  
  methods: {
    async startCall() {
      await call({ customerId: 'customer-123' });
    },
    
    handleSessionStart(callState) {
      console.log('Session started:', callState);
    }
  }
};
</script>
```

## ⚠️ Error Handling

The SDK provides comprehensive error handling with specific error types:

### Error Detection

```typescript
import { VideoEngagerAgentError } from 'videoengager-agent-sdk';

try {
  await call();
} catch (error) {
  if (VideoEngagerAgentError.isVeError(error)) {
    console.error('VideoEngager Error:', error.code);
    console.error('Message:', error.message);
    console.error('Details:', error.cause.description);
    console.error('Context:', error.context);
  }
}
```

### Error Reference

| Error Code | Category | Description | Retryable | Recoverable | Severity |
|------------|----------|-------------|-----------|-------------|----------|
| `AGENT_ALREADY_INITIALIZED` | Initialization | VideoEngager Agent is already initialized. Cannot initialize again. | ❌ No | ✅ Yes | Warning |
| `AGENT_NOT_INITIALIZED` | Initialization | VideoEngager Agent is not initialized. Call initialize() first. | ✅ Yes | ✅ Yes | Error |
| `AGENT_NOT_AUTHENTICATED` | Initialization | VideoEngager Agent is not authenticated. Call initialize() first. | ✅ Yes | ✅ Yes | Error |
| `AUTH_METHOD_NOT_SUPPORTED` | Authentication | The specified authentication method is not supported. | ❌ No | ✅ Yes | Error |
| `AUTH_GENESYS_ENVIRONMENT_REQUIRED` | Authentication | Genesys environment is required for Genesys authentication. | ❌ No | ✅ Yes | Error |
| `AUTH_GENERIC_API_KEY_REQUIRED` | Authentication | API key is required for generic authentication. | ❌ No | ✅ Yes | Error |
| `AUTH_CUSTOM_FUNCTION_REQUIRED` | Authentication | Custom authentication function is required for custom authentication. | ❌ No | ✅ Yes | Error |
| `AUTH_CUSTOM_PARAMETERS_MISSING` | Authentication | Authentication parameters are missing in the response from custom authentication function. | ✅ Yes | ✅ Yes | Error |
| `AUTH_CUSTOM_PARAMETERS_INVALID_TYPE` | Authentication | Authentication parameters should be an object. | ❌ No | ✅ Yes | Error |
| `AUTH_CUSTOM_PARAMETERS_EMPTY` | Authentication | Authentication parameters are empty. | ✅ Yes | ✅ Yes | Error |
| `AUTH_CUSTOM_PARAMETERS_INVALID_VALUE_TYPE` | Authentication | Invalid type for authentication parameter. Only string, number, and boolean are supported. | ❌ No | ✅ Yes | Error |
| `CONFIG_DOMAIN_REQUIRED` | Configuration | Domain must be a non-empty string. | ❌ No | ✅ Yes | Error |
| `CONFIG_DOMAIN_INVALID_FORMAT` | Configuration | Invalid domain format. Please provide a valid domain. | ❌ No | ✅ Yes | Error |
| `CONFIG_CONTAINER_ID_INVALID_TYPE` | Configuration | Container ID must be a string. | ❌ No | ✅ Yes | Error |
| `UI_HANDLERS_BAD_CONFIG` | UI Handlers | UI handlers are not configured correctly. Please check your UI handlers configuration. | ❌ No | ✅ Yes | Error |
| `UI_HANDLERS_METHOD_REQUIRED` | UI Handlers | Required UI handler method is missing or not a function. | ❌ No | ✅ Yes | Error |
| `UI_HANDLERS_NOT_INITIALIZED` | UI Handlers | UI handlers are not initialized. Please ensure that the UI handlers are set up before using them. | ❌ No | ✅ Yes | Error |
| `PARAM_CUSTOMER_ID_INVALID_TYPE` | Validation | Customer ID must be a string and not empty. | ❌ No | ✅ Yes | Error |
| `SESSION_ALREADY_ACTIVE` | Session | A session is already active. Cannot start a new session. | ❌ No | ✅ Yes | Warning |
| `SESSION_NOT_FOUND` | Session | No active session found. | ✅ Yes | ✅ Yes | Error |
| `SESSION_FAILED_TO_START` | Session | Failed to start the video session. | ✅ Yes | ❌ No | Error |
| `CALL_NOT_STARTED` | Call | Call has not been started yet. | ✅ Yes | ✅ Yes | Warning |
| `CALL_ALREADY_FINISHED` | Call | Call has already finished. | ❌ No | ✅ Yes | Warning |
| `WIDGET_IFRAME_LOAD_FAILED` | Widget | Failed to load the VideoEngager widget iframe. | ✅ Yes | ❌ No | Error |
| `WIDGET_IFRAME_NOT_FOUND` | Widget | VideoEngager widget iframe not found in the DOM. | ✅ Yes | ✅ Yes | Error |
| `WIDGET_CONTAINER_NOT_FOUND` | Widget | VideoEngager widget container not found in the DOM. | ✅ Yes | ✅ Yes | Error |
| `OPERATION_ALREADY_RUNNING` | Operation | Operation already in progress. | ✅ Yes | ✅ Yes | Warning |
| `OPERATION_TIMEOUT` | Operation | Operation timed out before completion. | ✅ Yes | ❌ No | Error |
| `OPERATION_CONFLICT` | Operation | Cannot run operation due to conflicting operations already running. | ✅ Yes | ✅ Yes | Warning |
| `OPERATION_ABORTED` | Operation | Operation was aborted before completion. | ❌ No | ✅ Yes | Warning |
| `VE_UNHANDLED_ERROR` | Generic | An unhandled error occurred in the VideoEngager system. Please check the logs for more details. | ✅ Yes | ❌ No | Error |
| `INVALID_ARGUMENT` | Validation | Invalid argument provided to the function. | ❌ No | ✅ Yes | Error |
| `REQUIRED_FIELD_MISSING` | Validation | Required field is missing or empty. | ❌ No | ✅ Yes | Error |

**Legend:**
- **Retryable**: ✅ Operation can be retried / ❌ Should not be retried
- **Recoverable**: ✅ Application can continue / ❌ Critical failure
- **Severity**: Error (serious issues) / Warning (non-blocking issues)

### Error Handling Best Practices

```typescript
import { init, call, VideoEngagerAgentError } from 'videoengager-agent-sdk';

async function safeInitialize() {
  try {
    await init({
      authMethod: 'generic',
      apiKey: 'your-api-key',
      domain: 'your-domain.videome.leadsecure.com',
      agentEmail: 'agent@yourcompany.com'
    });
  } catch (error) {
    if (VideoEngagerAgentError.isVeError(error)) {
      switch (error.code) {
        case 'AGENT_ALREADY_INITIALIZED':
          console.log('Agent already initialized, skipping...');
          break;
        case 'AUTH_GENERIC_API_KEY_REQUIRED':
          console.error('API key is missing or invalid');
          break;
        case 'CONFIG_DOMAIN_REQUIRED':
          console.error('Domain configuration is missing');
          break;
        default:
          console.error('Initialization failed:', error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

async function safeCall(customerId) {
  try {
    await call({ customerId });
  } catch (error) {
    if (VideoEngagerAgentError.isVeError(error)) {
      switch (error.code) {
        case 'AGENT_NOT_INITIALIZED':
          console.error('Must initialize agent first');
          await safeInitialize();
          break;
        case 'SESSION_ALREADY_ACTIVE':
          console.log('Session already active');
          break;
        case 'CALL_NOT_STARTED':
          console.error('No active call found');
          break;
        default:
          console.error('Call failed:', error.message);
      }
    }
  }
}

// Error with retry logic
async function callWithRetry(customerId, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await call({ customerId });
      return; // Success
    } catch (error) {
      if (VideoEngagerAgentError.isVeError(error)) {
        // Check if error is retryable
        const retryableErrors = [
          'OPERATION_TIMEOUT',
          'SESSION_NOT_FOUND', 
          'WIDGET_IFRAME_LOAD_FAILED'
        ];
        
        if (retryableErrors.includes(error.code) && attempt < maxRetries) {
          console.log(`Attempt ${attempt} failed, retrying...`);
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          continue;
        }
      }
      throw error; // Non-retryable or max attempts reached
    }
  }
}
```

## 🔧 Advanced Configuration

### Logging

Enable detailed logging for debugging by setting logger to `true`:

```typescript
await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com',
  logger: true // Enable debug logging
});
```

### Container Customization

Specify a custom container for the widget:

```typescript
await init({
  authMethod: 'generic',
  apiKey: 'your-api-key',
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com',
  options: {
    containerId: 'my-custom-video-container'
  }
});
```

Ensure the container exists in your HTML:

```html
<div id="my-custom-video-container"></div>
```

## 🚀 Features

### Session Management

Track and manage multiple sessions:

```typescript
let currentSession = null;

on('sessionStarted', (callState) => {
  currentSession = {
    id: callState.visitorId,
    startTime: new Date(),
    agentEmail: callState.email,
    customerData: callState.attributes
  };
  
  // Update your CRM or tracking system
  updateCRM(currentSession);
});

on('sessionEnded', (callState) => {
  if (currentSession) {
    currentSession.endTime = new Date();
    currentSession.duration = currentSession.endTime - currentSession.startTime;
    
    // Log session details
    logSessionEnd(currentSession);
    currentSession = null;
  }
});
```

### Analytics Integration

```typescript
on('callStateUpdated', (callState) => {
  // Send analytics events
  analytics.track('videoengager_call_state_changed', {
    status: callState.status,
    visitorId: callState.visitorId,
    agentEmail: callState.email,
    timestamp: new Date().toISOString()
  });
});

on('sessionStarted', (callState) => {
  analytics.track('videoengager_session_started', {
    visitorId: callState.visitorId,
    agentEmail: callState.email,
    shortUrl: callState.shortUrl
  });
});
```

### Multi-tenant Support

```typescript
// Different configurations for different tenants
const tenantConfigs = {
  'tenant-a': {
    authMethod: 'generic',
    apiKey: 'tenant-a-api-key',
    domain: 'tenant-a.videome.leadsecure.com',
    agentEmail: 'agent@tenant-a.com'
  },
  'tenant-b': {
    authMethod: 'genesys',
    environment: 'mypurecloud.com',
    domain: 'tenant-b.videome.leadsecure.com'
  }
};

async function initializeForTenant(tenantId) {
  const config = tenantConfigs[tenantId];
  if (!config) {
    throw new Error(`Unknown tenant: ${tenantId}`);
  }
  
  await init(config);
}
```

##  Complete Integration Example

```typescript
import { 
  init, 
  call, 
  endCall, 
  on, 
  off, 
  isInitialized,
  destroy,
  VideoEngagerAgentError 
} from 'videoengager-agent-sdk';

class VideoEngagerService {
  private isReady = false;
  private currentCall = null;

  async initialize() {
    try {
      if (isInitialized()) {
        console.log('Already initialized');
        return;
      }

      await init({
        authMethod: 'generic',
        apiKey: process.env.VIDEOENGAGER_API_KEY,
        domain: process.env.VIDEOENGAGER_DOMAIN,
        agentEmail: 'agent@yourcompany.com',
        options: {
          containerId: 'video-widget-container'
        }
      });

      this.setupEventHandlers();
      this.isReady = true;
      console.log('VideoEngager initialized successfully');
    } catch (error) {
      console.error('Failed to initialize VideoEngager:', error);
      throw error;
    }
  }

  private setupEventHandlers() {
    on('sessionStarted', (callState) => {
      this.currentCall = callState;
      console.log('Call started:', callState.visitorId);
      this.notifyCallStart(callState);
    });

    on('sessionEnded', (callState) => {
      console.log('Call ended');
      this.notifyCallEnd(callState);
      this.currentCall = null;
    });

    on('sessionFailed', (payload) => {
      console.error('Call failed:', payload);
      this.notifyCallFailed(payload);
    });

    on('callStateUpdated', (callState) => {
      console.log('Call state updated:', callState.status);
      this.updateCallStatus(callState);
    });
  }

  async startCall(customerId) {
    if (!this.isReady) {
      throw new Error('VideoEngager not initialized');
    }

    try {
      await call({ customerId });
    } catch (error) {
      if (VideoEngagerAgentError.isVeError(error)) {
        this.handleVideoEngagerError(error);
      }
      throw error;
    }
  }

  async endCall() {
    if (!this.currentCall) {
      console.log('No active call to end');
      return;
    }

    try {
      await endCall();
    } catch (error) {
      console.error('Failed to end call:', error);
      throw error;
    }
  }

  async shutdown() {
    try {
      await destroy();
      this.isReady = false;
      this.currentCall = null;
      console.log('VideoEngager shutdown complete');
    } catch (error) {
      console.error('Error during shutdown:', error);
    }
  }

  private handleVideoEngagerError(error) {
    switch (error.code) {
      case 'SESSION_ALREADY_ACTIVE':
        console.log('Session already active, ignoring...');
        break;
      case 'CALL_NOT_STARTED':
        console.log('No call to end');
        break;
      default:
        console.error('VideoEngager error:', error.message);
    }
  }

  private notifyCallStart(callState) {
    // Notify your application
    window.dispatchEvent(new CustomEvent('video-call-started', {
      detail: callState
    }));
  }

  private notifyCallEnd(callState) {
    // Notify your application
    window.dispatchEvent(new CustomEvent('video-call-ended', {
      detail: callState
    }));
  }

  private notifyCallFailed(payload) {
    // Notify your application
    window.dispatchEvent(new CustomEvent('video-call-failed', {
      detail: payload
    }));
  }

  private updateCallStatus(callState) {
    // Update UI or state management
    console.log('Updating call status to:', callState.status);
  }

  getCurrentCall() {
    return this.currentCall;
  }

  isCallActive() {
    return this.currentCall?.inActiveSession || false;
  }
}

// Usage
const videoService = new VideoEngagerService();

// Initialize on app start
await videoService.initialize();

// Start a call when needed
await videoService.startCall('customer-123');

// End call programmatically
await videoService.endCall();

// Cleanup on app shutdown
await videoService.shutdown();
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. Container Not Found

**Error:** `WIDGET_CONTAINER_NOT_FOUND`

**Solution:** Ensure the container element exists in the DOM:

```html
<div id="video-engager-container"></div>
```

Or specify a custom container:

```typescript
await init({
  // ... other config
  options: {
    containerId: 'my-existing-container'
  }
});
```

#### 2. Authentication Failures

**Error:** `AUTH_GENERIC_API_KEY_REQUIRED`

**Solution:** Verify your API key is correct and not expired:

```typescript
await init({
  authMethod: 'generic',
  apiKey: 'your-valid-api-key', // Ensure this is correct
  domain: 'your-domain.videome.leadsecure.com',
  agentEmail: 'agent@yourcompany.com'
});
```

#### 3. Domain Configuration Issues

**Error:** `CONFIG_DOMAIN_REQUIRED` or connection failures

**Solution:** Verify the domain format:

```typescript
// Correct formats
domain: 'your-subdomain.videome.leadsecure.com'
domain: 'your-subdomain.uae.leadsecure.com'

// Incorrect - missing subdomain
domain: 'videome.leadsecure.com'
```

#### 4. CORS Issues (CDN Usage)

If using the CDN version and experiencing CORS issues, ensure your domain is whitelisted with VideoEngager support.

#### 5. Multiple Initialization

**Error:** `AGENT_ALREADY_INITIALIZED`

**Solution:** Check if already initialized before calling init:

```typescript
if (!isInitialized()) {
  await init(config);
}
```

### Debug Mode

Enable debug logging to troubleshoot issues:

```typescript
await init({
  // ... your config
  logger: true // Enable debug logging
});
```

## 🤝 Support

For technical support, integration assistance, or questions about this SDK:

- **Documentation**: [VideoEngager Developer Portal](https://videoengager.github.io/)
- **Support Email**: support@videoengager.com

---

Built with ❤️ by the VideoEngager team
