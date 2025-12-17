![Product update v6.0.0](https://github.com/VideoEngager/videoengager-agent-sdk/releases/download/v6.0.0/RELEASE_IMAGE.png)

## Product Update v6.0.0

### Changes



- Add VideoEngager Standalone mode support for incoming calls: ![change](https://img.shields.io/badge/change-1E90FF) ![minor](https://img.shields.io/badge/minor-1E90FF) ![feat](https://img.shields.io/badge/feat-8A2BE2) 


  Introduces comprehensive standalone mode capabilities for agent-initiated workflows:

  - **Incoming Call Notifications**: Agents can now receive and manage incoming call notifications
  - **Call Accept/Reject**: New `acceptCall()` and `rejectCall()` APIs for call control
  - **Queue Management**: `switchQueue()` and `isOnQueue()` for agent presence management
  - **Agent Information**: `getDisplayName()` and `agentSettings()` for agent data access
  - **Call List Management**: `getReceivedCalls()` to track pending incoming calls
  - **New Events**: `incomingCall`, `callRemoved`, and `inCallsQueue` for real-time updates

  This feature enables building custom agent dashboards and call center applications with full control over the agent experience. Requires `authMethod: 'generic'` or `authMethod: 'token'`.




- Implement token based authentication: ![change](https://img.shields.io/badge/change-1E90FF) ![minor](https://img.shields.io/badge/minor-1E90FF) ![feat](https://img.shields.io/badge/feat-8A2BE2) 