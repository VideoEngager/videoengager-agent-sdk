/**
 * Logger interface that consumers can implement.
 * Uses JSDoc for type definition in JavaScript.
 * Class-based approach allows for instanceof checks if needed.
 * @interface
 */
declare class ILogger {
    /**
     * Logs a debug message.
     * @param {string} message - The primary log message.
     * @param {object} [context] - Additional key-value context.
     */
    debug(message: string, context?: object): void;
    /**
     * Logs an informational message.
     * @param {string} message - The primary log message.
     * @param {object} [context] - Additional key-value context.
     */
    info(message: string, context?: object): void;
    /**
     * Logs a warning message.
     * @param {string} message - The primary log message.
     * @param {object} [context] - Additional key-value context.
     */
    warn(message: string, context?: object): void;
    /**
     * Logs an error message.
     * @param {string} message - The primary log message.
     * @param {Error|object} [error] - The associated error object or error context.
     * @param {object} [context] - Additional key-value context.
     */
    error(message: string, error?: Error | object, context?: object): void;
    /**
     * Creates a child logger instance with additional context merged in.
     * Useful for adding component-specific context automatically.
     * @param {object} context - Context to add to the child logger.
     * @returns {ILogger} - A new logger instance with the merged context.
     */
    withContext(context: object): ILogger;
    /**
     * Sets the minimum log level for this logger instance.
     * @param {LogLevel} level
     */
    setLevel(level: Readonly<{
        NONE: 0;
        ERROR: 1;
        WARN: 2;
        INFO: 3;
        DEBUG: 4;
    }>): void;
    /**
    * Gets the current log level for this logger instance.
    * @returns {LogLevel}
    */
    getLevel(): Readonly<{
        NONE: 0;
        ERROR: 1;
        WARN: 2;
        INFO: 3;
        DEBUG: 4;
    }>;
}

declare class AuthenticationModuleImpl<T extends string = string, C extends Record<string, any> & {
    authMethod?: T;
} = Record<string, any> & {
    authMethod: T;
}> {
    readonly name: T;
    configs: C;
    validateConfigs: () => void;
    authenticate: (options: C) => Promise<Record<string, string>> | Record<string, string>;
    constructor(name: T, configs: C);
}

type CustomAuthConfig = {
    authMethod: 'custom';
    authenticateFn: (options: any) => Record<string, any> | Promise<Record<string, any>>;
};
declare class CustomAuth implements AuthenticationModuleImpl<'custom', CustomAuthConfig> {
    readonly name: "custom";
    configs: CustomAuthConfig;
    constructor(configs: CustomAuthConfig);
    authenticate(): Promise<Record<string, string>>;
    validateConfigs(): void;
}

type GenericAuthConfig = {
    authMethod?: 'generic';
    apiKey: string;
    agentEmail?: string;
    organizationId?: string;
};
declare class GenericAuth implements AuthenticationModuleImpl<'generic', GenericAuthConfig> {
    readonly name: "generic";
    configs: GenericAuthConfig;
    constructor(configs: GenericAuthConfig);
    authenticate(): {
        environment: string;
        pak: string;
        email: string;
    };
    validateConfigs(): void;
}

type GenesysDomains = 'inindca.com' | 'pure.cloud' | 'mypurecloud.com' | 'mypurecloud.jp' | 'apne2.pure.cloud' | 'apne3.pure.cloud' | 'aps1.pure.cloud' | 'mypurecloud.com.au' | 'cac1.pure.cloud' | 'mypurecloud.de' | 'euc2.pure.cloud' | 'mypurecloud.ie' | 'euw2.pure.cloud' | 'mec1.pure.cloud' | 'sae1.pure.cloud' | 'usw2.pure.cloud' | 'inindca.com';
type GenesysAuthConfig = {
    authMethod: 'genesys';
    environment: GenesysDomains;
};
declare class GenesysAuth implements AuthenticationModuleImpl<'genesys', GenesysAuthConfig> {
    readonly name: "genesys";
    configs: GenesysAuthConfig;
    constructor(configs: GenesysAuthConfig);
    authenticate(): {
        environment: GenesysDomains;
    };
    validateConfigs(): void;
}

declare const authProviders: Readonly<{
    generic: typeof GenericAuth;
    genesys: typeof GenesysAuth;
    custom: typeof CustomAuth;
}>;
type AuthProviderTypes = keyof typeof authProviders | undefined;
type AuthProviderConfigs<T extends AuthProviderTypes> = InstanceType<typeof authProviders[T extends undefined ? 'generic' : T]>['configs'];

/**
 * Supported VideoEngager domains
 */
type VeDomains = 'videome.leadsecure.com' | 'uae.leadsecure.com';
/**
 * Custom UI handlers for platform-specific iframe management
 * These handlers allow you to customize how the VideoEngager widget is displayed
 *
 * @example
 * ```typescript
 * const customHandlers: VeAgentUiHandlers = {
 *   openIframe: async (url, options) => {
 *     // Custom logic to open iframe in React/Vue/Angular etc.
 *     const iframe = document.createElement('iframe');
 *     iframe.src = url;
 *     document.body.appendChild(iframe);
 *   },
 *   closeIframe: async (options) => {
 *     // Custom logic to close iframe
 *     const iframe = document.querySelector('iframe');
 *     iframe?.remove();
 *   },
 *   getIframe: (options) => {
 *     return document.querySelector('iframe');
 *   }
 * };
 * ```
 */
type VeAgentUiHandlers = {
    /** Opens the VideoEngager widget iframe */
    openIframe: (url: string, options: VeAgentOptions<AuthProviderTypes>) => void | Promise<void>;
    /** Closes the VideoEngager widget iframe */
    closeIframe: (options: VeAgentOptions<AuthProviderTypes>) => void | Promise<void>;
    /** Gets the current iframe element if it exists */
    getIframe: (options: VeAgentOptions<AuthProviderTypes>) => HTMLIFrameElement | null | Promise<HTMLIFrameElement | null>;
};
type UiHandlerConfig<UiHandlerProvided extends boolean = false> = UiHandlerProvided extends true ? {
    /** Custom Handler for platform-specific actions
     * Some frameworks and libraries might not support the default behavior (creating iframe and appending it to the container)
     * In such cases, you can provide your own handlers to open and close the iframe.
     * The `openIframe` method should create the iframe and append it to the container.
     * The `closeIframe` method should remove the iframe from the DOM.
     * The `getIframe` method should return the iframe element if it exists, or null
     */
    uiHandlers?: VeAgentUiHandlers;
} : {
    /** Custom container ID for the widget iframe (default: 'video-engager-container') */
    containerId?: string;
};
/**
 * Base configuration options for VideoEngager Agent
 */
type VeAgentBaseOptions = {
    options?: {} & UiHandlerConfig<true | false>;
    /** VideoEngager domain to connect to */
    domain: VeDomains | string;
    /** Optional logger instance for debugging */
    logger?: ILogger;
};
/**
 * Complete configuration options for VideoEngager Agent
 * Combines base options with authentication provider specific options
 */
type VeAgentOptions<T extends AuthProviderTypes = 'generic'> = VeAgentBaseOptions & AuthProviderConfigs<T>;
/**
 * VideoEngager call status events
 * These represent the different states a call can be in
 */
declare const EVENTS_NAMES: Readonly<{
    /** No active call */
    readonly NONE: "NONE";
    /** Call has been started and is active */
    readonly CALL_STARTED: "CALL_STARTED";
    /** Pre-call state, preparing to start */
    readonly PRE_CALL: "PRE_CALL";
    /** Call has completely finished - final state */
    readonly FINISHED: "FINISHED";
    /** Call is ending */
    readonly END_CALL: "END_CALL";
}>;
type EVENTS_NAMES = typeof EVENTS_NAMES[keyof typeof EVENTS_NAMES];
/**
 * Event payload structure received from VideoEngager widget
 * Note: tennant_id comes from external iframe and cannot be changed
 */
type EventPayload<T extends EVENTS_NAMES> = {
    /** Current status of the call */
    status: T;
    /** Agent's email address */
    email: string;
    /** Short URL for the call */
    shortUrl: string;
    /** Unique visitor identifier */
    visitorId: string;
    /** Call PIN number */
    pin: string;
    /** Tenant ID (note: spelling comes from external source) */
    tennant_id: string;
    /** Caller's email address */
    callerEmail: string;
    /** Additional call attributes */
    attributes?: Record<string, any>;
};
/**
 * Complete call state including session information
 */
type CallState = EventPayload<EVENTS_NAMES> & {
    /** Whether there is currently an active session */
    inActiveSession: boolean;
};
/**
 * Event map for VideoEngager Agent events
 * Used for type-safe event handling
 *
 * @example
 * ```typescript
 * agent.on('sessionStarted', (callState: CallState) => {
 *   console.log('Session started with visitor:', callState.visitorId);
 * });
 *
 * agent.on('sessionEnded', (callState: CallState) => {
 *   console.log('Session ended');
 * });
 * ```
 */
type VeEventMap = {
    /** Emitted when the agent is initialized with options */
    initialized: VeAgentOptions<AuthProviderTypes>;
    /** Emitted when a new session starts */
    sessionStarted: CallState;
    /** Emitted when a session ends */
    sessionEnded: CallState;
    /** Emitted when a session fails to start */
    sessionFailed: EventPayload<EVENTS_NAMES>;
    /** Emitted whenever the call state changes */
    callStateUpdated: CallState;
    /** Emitted when the agent SDK is cleaned up */
    cleanup: void;
};

// @ts-check
type EventMap<T> = Record<keyof T, any> | DefaultEventMap;
type DefaultEventMap = [never];

// Handler for specific events
type DefaultHandler<K, T> = T extends DefaultEventMap
    ? (payload?: any) => void | Promise<void>
    : (K extends keyof T ? (payload: T[K]) => void | Promise<void> : never);
type WildcardTuple<T> = (
    ...args: {
        [K in keyof T]: [type: K, payload: T[K]]
    }[keyof T]
) => void | Promise<void>;
/**
 * A safer, async-aware EventBus built on top of `mitt`.
 *
 * - Supports both sync and async handlers
 * - Prevents race conditions by tracking in-flight events
 * - Gracefully shuts down by waiting for all async handlers to complete
 * - Emits `'error'` events if any handler throws
 */
declare class EventEmitter<T extends EventMap<T> = DefaultEventMap> {
    /**
     * Register a listener with async/sync behavior.
     * @param event The event name to listen for
     * @param handler The callback function
     * @param options Configuration options
     * @returns Unsubscribe function
     */
    on<K extends keyof T>(event: K, handler: DefaultHandler<K, T>, options?: { async?: boolean }): () => void;
    on<K extends '*'>(event: K, handler: WildcardTuple<T>, options?: { async?: boolean }): () => void;
    /** Alias for `.on()` */
    addListener<K extends keyof T>(event: K, handler: DefaultHandler<K, T>, options?: { async?: boolean }): () => void;
    addListener<K extends '*'>(event: K, handler: WildcardTuple<T>, options?: { async?: boolean }): () => void;

    /**
     * Removes a specific handler for a given event.
     * @param event The event name
     * @param handler The handler to remove
     */
    off<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): void;
    /** Alias for `.off()` */
    removeListener<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): void;
    /**
     * Emits an event to all listeners.
     * @param event The event name
     * @param payload The event payload
     * @param options Configuration options
     * @returns Promise that resolves when complete
     */
    emit<K extends keyof T>(event: K, payload: T[K], options?: { awaitListeners?: boolean }): Promise<void>;
    
    /**
     * Gracefully shut down the bus, waiting for in-flight events.
     * @param timeoutMs Maximum time to wait for pending operations (default: 5000ms)
     * @returns Promise that resolves when shutdown is complete
     */
    shutdown(timeoutMs?: number): Promise<void>;
    
    /**
     * Alias for `.on()`
     * @param event The event name
     * @param handler The callback function
     * @returns Unsubscribe function
     */
    subscribe<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): () => void;
    
    /**
     * Get number of registered listeners.
     * @param event Optional event name to count listeners for
     * @returns Number of listeners
     */
    getListenerCount(event?: string): number;
}

declare interface EventEmitter<T extends EventMap<T> = DefaultEventMap> {
    /**
     * Register a listener with async/sync behavior.
     * @param event The event name to listen for
     * @param handler The callback function
     * @param options Configuration options
     * @returns Unsubscribe function
     */
    on<K extends keyof T>(event: K, handler: DefaultHandler<K, T>, options?: { async?: boolean }): () => void;
    on<K extends '*'>(event: K, handler: WildcardTuple<T>, options?: { async?: boolean }): () => void;
    /** Alias for `.on()` */
    addListener<K extends keyof T>(event: K, handler: DefaultHandler<K, T>, options?: { async?: boolean }): () => void;
    /** Alias for `.on()` */
    addListener<K extends '*'>(event: K, handler: WildcardTuple<T>, options?: { async?: boolean }): () => void;
    /**
     * Removes a specific handler for a given event.
     * @param event The event name
     * @param handler The handler to remove
     */
    off<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): void;
    /** Alias for `.off()` */
    removeListener<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): void;
    /** Alias for `.off()` */
    removeListener<K extends '*'>(event: K, handler: WildcardTuple<T>): void;
    
    /**
     * Register a one-time listener for a specific event.
     * @param event The event name
     * @param handler The callback function
     * @param options Configuration options
     * @returns Unsubscribe function
     */
    once<K extends keyof T>(event: K, handler: DefaultHandler<K, T>, options?: { async?: boolean }): () => void;
    once<K extends '*'>(event: K, handler: WildcardTuple<T>, options?: { async?: boolean }): () => void;
    /**
     * Emits an event to all listeners.
     * @param event The event name
     * @param payload The event payload
     * @param options Configuration options
     * @returns Promise that resolves when complete
     */
    emit<K extends keyof T>(
        ...args: T extends DefaultEventMap
            ? [event: K, payload?: any, options?: { awaitListeners?: boolean }]
            : (T[K] extends void | undefined
                ? [event: K, payload?: T[K], options?: { awaitListeners?: boolean }]
                : [event: K, payload: T[K], options?: { awaitListeners?: boolean }])
    ): Promise<void>;
    
    /**
     * Gracefully shut down the bus, waiting for in-flight events.
     * @param timeoutMs Maximum time to wait for pending operations (default: 5000ms)
     * @returns Promise that resolves when shutdown is complete
     */
    shutdown(timeoutMs?: number): Promise<void>;
    
    /**
     * Alias for `.on()`
     * @param event The event name
     * @param handler The callback function
     * @returns Unsubscribe function
     */
    subscribe<K extends keyof T>(event: K, handler: DefaultHandler<K, T>): () => void;
    
    /**
     * Get number of registered listeners.
     * @param event Optional event name to count listeners for
     * @returns Number of listeners
     */
    getListenerCount(event?: string): number;
}

declare class OperationRunningError extends Error {
    readonly op: string;
    constructor(op: string);
}
declare class ConflictError extends Error {
    readonly op: string;
    readonly conflicts: string[];
    constructor(op: string, conflicts: string[]);
}
declare class OperationAbortedError extends Error {
    readonly op: string;
    constructor(op: string);
}
declare class OperationTimeoutError extends Error {
    readonly op: string;
    readonly ms: number;
    constructor(op: string, ms: number);
}

/**
 * Result type for beforeRun hook that allows skipping the operation
 */
interface BeforeRunResult<T = unknown> {
    skip?: boolean;
    value?: T;
}
/**
 * PromiseManager provides a way to manage concurrent operations, handling conflicts,
 * timeouts, and clean abortion with potential rollback capabilities.
 */
declare class PromiseManager {
    private logger?;
    private configs;
    static OperationRunningError: typeof OperationRunningError;
    static ConflictError: typeof ConflictError;
    static OperationAbortedError: typeof OperationAbortedError;
    static OperationTimeoutError: typeof OperationTimeoutError;
    private operations;
    /**
     * Creates a new PromiseManager instance
     * @param logger Optional logger for debug and error messages
     */
    constructor(logger?: ILogger | undefined, configs?: {
        memoryLeakCheckTimeoutMs: number;
    });
    /**
     * Runs an operation with the given name and options
     *
     * @param name Unique identifier for this operation
     * @param operation Function that performs the operation, receiving an AbortSignal
     * @param options Configuration options for this operation
     * @returns Promise that resolves with the result of the operation
     * @throws {OperationRunningError} If operation is already running and waitIfRunning is false
     * @throws {ConflictError} If operation conflicts with operations in conflictsWith list
     * @throws {OperationAbortedError} If operation was aborted
     * @throws {OperationTimeoutError} If operation timed out
     */
    run<T>(name: string, operation: (signal: AbortSignal) => Promise<T>, options?: {
        waitIfRunning?: boolean;
        useExistingRunResult?: boolean;
        onWaitForRunsFail?: 'ignore' | 'throw';
        waitIfRunningDelayMs?: number;
        conflictsWith?: string[];
        waitFor?: string[];
        waitForDelayMs?: number;
        onExistingRunFail?: 'ignore' | 'throw';
        timeoutMs?: number;
        signal?: AbortSignal;
        beforeRun?: (operationName: string, signal: AbortSignal) => Promise<BeforeRunResult<T> | void> | BeforeRunResult<T> | void;
        onSuccess?: (result: T) => Promise<void> | void;
        onAbort?: () => Promise<void> | void;
        onError?: (error: Error) => Promise<void> | void;
        /**
        * For proper stack trace preservation, implementors should:
        * 1. Return the original error when appropriate
        * 2. When creating new errors, set the cause property to the original error
        * 3. Consider preserving the original stack trace
        */
        transformError?: (err: unknown) => Error;
    }): Promise<T>;
    /**
     * Checks if an operation is currently running
     * @param op Name of the operation to check
     * @returns True if the operation is running, false otherwise
     */
    isRunning(op: string): boolean;
    /**
     * Gets the names of all currently running operations
     * @returns Array of operation names
     */
    getRunningOperations(): string[];
    /**
     * Waits for a specific operation to complete
     * @param op Name of the operation to wait for
     * @returns Promise that resolves when the operation completes
     */
    waitFor(op: string): Promise<void>;
    /**
     * Waits for all running operations to complete
     * @returns Promise that resolves when all operations are complete
     */
    waitForAll(): Promise<void>;
    /**
     * Waits for many running operations to complete
     * @returns Promise that resolves when all operations are complete
     */
    waitForMany({ operations, delay }: {
        operations: string[];
        delay?: number;
    }): Promise<void>;
    /**
     * Aborts a specific operation by name
     * @param op Name of the operation to abort
     * @returns True if the operation was found and aborted, false otherwise
     */
    abort(op: string, reason?: string): boolean;
    /**
     * Aborts all currently running operations
     * @returns Number of operations that were aborted
     */
    abortAll(reason?: string): number;
}

interface ErrorCause {
    code: string;
    name: string;
    description: string;
    component?: string;
    retryable?: boolean;
    originalError?: Error;
}
declare class VideoEngagerError extends Error {
    static isVeError(error: unknown): error is VideoEngagerError;
    cause: ErrorCause;
    context: Record<string, any>;
    code: string;
    constructor(name: string, message: string, cause: ErrorCause, context?: Record<string, any>);
    toString(): string;
    toJSON(): Record<string, any>;
}
interface ErrorOptions {
    originalError?: Error | string;
    context?: Record<string, any>;
    retryable?: boolean;
    component?: string;
}

declare const VEErrorCodes: Readonly<{
    AGENT_ALREADY_INITIALIZED: "agent|already-initialized";
    AGENT_NOT_INITIALIZED: "agent|not-initialized";
    AGENT_NOT_AUTHENTICATED: "agent|not-authenticated";
    AUTH_METHOD_NOT_SUPPORTED: "auth|method-not-supported";
    AUTH_GENESYS_ENVIRONMENT_REQUIRED: "auth|genesys-environment-required";
    AUTH_GENERIC_API_KEY_REQUIRED: "auth|generic-api-key-required";
    AUTH_CUSTOM_FUNCTION_REQUIRED: "auth|custom-function-required";
    AUTH_CUSTOM_PARAMETERS_MISSING: "auth|custom-parameters-missing";
    AUTH_CUSTOM_PARAMETERS_INVALID_TYPE: "auth|custom-parameters-invalid-type";
    AUTH_CUSTOM_PARAMETERS_EMPTY: "auth|custom-parameters-empty";
    AUTH_CUSTOM_PARAMETERS_INVALID_VALUE_TYPE: "auth|custom-parameters-invalid-value-type";
    CONFIG_DOMAIN_REQUIRED: "config|domain-required";
    CONFIG_DOMAIN_INVALID_FORMAT: "config|domain-invalid-format";
    CONFIG_CONTAINER_ID_INVALID_TYPE: "config|container-id-invalid-type";
    UI_HANDLERS_BAD_CONFIG: "ui-handlers|bad-config";
    UI_HANDLERS_METHOD_REQUIRED: "ui-handlers|method-required";
    UI_HANDLERS_NOT_INITIALIZED: "ui-handlers|not-initialized";
    PARAM_CUSTOMER_ID_INVALID_TYPE: "param|customer-id-invalid-type";
    SESSION_ALREADY_ACTIVE: "session|already-active";
    SESSION_NOT_FOUND: "session|not-found";
    SESSION_FAILED_TO_START: "session|failed-to-start";
    CALL_NOT_STARTED: "call|not-started";
    CALL_ALREADY_FINISHED: "call|already-finished";
    WIDGET_IFRAME_LOAD_FAILED: "widget|iframe-load-failed";
    WIDGET_IFRAME_NOT_FOUND: "widget|iframe-not-found";
    WIDGET_CONTAINER_NOT_FOUND: "widget|container-not-found";
    OPERATION_ALREADY_RUNNING: "operation|already-running";
    OPERATION_TIMEOUT: "operation|timeout";
    OPERATION_CONFLICT: "operation|conflict";
    OPERATION_ABORTED: "operation|aborted";
    VE_UNHANDLED_ERROR: "ve|unhandled-error";
    INVALID_ARGUMENT: "validation|invalid-argument";
    REQUIRED_FIELD_MISSING: "validation|required-field-missing";
}>;
type VEErrorCodes = typeof VEErrorCodes[keyof typeof VEErrorCodes];
declare const VEErrorDetails: Readonly<{
    "agent|already-initialized": {
        name: string;
        description: string;
        code: "agent|already-initialized";
    };
    "agent|not-initialized": {
        name: string;
        description: string;
        code: "agent|not-initialized";
    };
    "agent|not-authenticated": {
        name: string;
        description: string;
        code: "agent|not-authenticated";
    };
    "auth|method-not-supported": {
        name: string;
        description: string;
        code: "auth|method-not-supported";
    };
    "auth|genesys-environment-required": {
        name: string;
        description: string;
        code: "auth|genesys-environment-required";
    };
    "auth|generic-api-key-required": {
        name: string;
        description: string;
        code: "auth|generic-api-key-required";
    };
    "auth|custom-function-required": {
        name: string;
        description: string;
        code: "auth|custom-function-required";
    };
    "auth|custom-parameters-missing": {
        name: string;
        description: string;
        code: "auth|custom-parameters-missing";
    };
    "auth|custom-parameters-invalid-type": {
        name: string;
        description: string;
        code: "auth|custom-parameters-invalid-type";
    };
    "auth|custom-parameters-empty": {
        name: string;
        description: string;
        code: "auth|custom-parameters-empty";
    };
    "auth|custom-parameters-invalid-value-type": {
        name: string;
        description: string;
        code: "auth|custom-parameters-invalid-value-type";
    };
    "config|domain-required": {
        name: string;
        description: string;
        code: "config|domain-required";
    };
    "config|domain-invalid-format": {
        name: string;
        description: string;
        code: "config|domain-invalid-format";
    };
    "config|container-id-invalid-type": {
        name: string;
        description: string;
        code: "config|container-id-invalid-type";
    };
    "ui-handlers|bad-config": {
        name: string;
        description: string;
        code: "ui-handlers|bad-config";
    };
    "ui-handlers|method-required": {
        name: string;
        description: string;
        code: "ui-handlers|method-required";
    };
    "ui-handlers|not-initialized": {
        name: string;
        description: string;
        code: "ui-handlers|not-initialized";
    };
    "param|customer-id-invalid-type": {
        name: string;
        description: string;
        code: "param|customer-id-invalid-type";
    };
    "session|already-active": {
        name: string;
        description: string;
        code: "session|already-active";
    };
    "session|not-found": {
        name: string;
        description: string;
        code: "session|not-found";
    };
    "session|failed-to-start": {
        name: string;
        description: string;
        code: "session|failed-to-start";
    };
    "call|not-started": {
        name: string;
        description: string;
        code: "call|not-started";
    };
    "call|already-finished": {
        name: string;
        description: string;
        code: "call|already-finished";
    };
    "widget|iframe-load-failed": {
        name: string;
        description: string;
        code: "widget|iframe-load-failed";
    };
    "widget|iframe-not-found": {
        name: string;
        description: string;
        code: "widget|iframe-not-found";
    };
    "widget|container-not-found": {
        name: string;
        description: string;
        code: "widget|container-not-found";
    };
    "operation|already-running": {
        name: string;
        description: string;
        code: "operation|already-running";
    };
    "operation|timeout": {
        name: string;
        description: string;
        code: "operation|timeout";
    };
    "operation|conflict": {
        name: string;
        description: string;
        code: "operation|conflict";
    };
    "operation|aborted": {
        name: string;
        description: string;
        code: "operation|aborted";
    };
    "ve|unhandled-error": {
        name: string;
        description: string;
        code: "ve|unhandled-error";
    };
    "validation|invalid-argument": {
        name: string;
        description: string;
        code: "validation|invalid-argument";
    };
    "validation|required-field-missing": {
        name: string;
        description: string;
        code: "validation|required-field-missing";
    };
}>;
declare const VideoEngagerAgentError: {
    new (code: "agent|already-initialized" | "agent|not-initialized" | "agent|not-authenticated" | "auth|method-not-supported" | "auth|genesys-environment-required" | "auth|generic-api-key-required" | "auth|custom-function-required" | "auth|custom-parameters-missing" | "auth|custom-parameters-invalid-type" | "auth|custom-parameters-empty" | "auth|custom-parameters-invalid-value-type" | "config|domain-required" | "config|domain-invalid-format" | "config|container-id-invalid-type" | "ui-handlers|bad-config" | "ui-handlers|method-required" | "ui-handlers|not-initialized" | "param|customer-id-invalid-type" | "session|already-active" | "session|not-found" | "session|failed-to-start" | "call|not-started" | "call|already-finished" | "widget|iframe-load-failed" | "widget|iframe-not-found" | "widget|container-not-found" | "operation|already-running" | "operation|timeout" | "operation|conflict" | "operation|aborted" | "ve|unhandled-error" | "validation|invalid-argument" | "validation|required-field-missing", options?: ErrorOptions): {
        version: string;
        cause: ErrorCause;
        context: Record<string, any>;
        code: string;
        toString(): string;
        toJSON(): Record<string, any>;
        name: string;
        message: string;
        stack?: string;
    };
    readonly codes: Readonly<{
        AGENT_ALREADY_INITIALIZED: "agent|already-initialized";
        AGENT_NOT_INITIALIZED: "agent|not-initialized";
        AGENT_NOT_AUTHENTICATED: "agent|not-authenticated";
        AUTH_METHOD_NOT_SUPPORTED: "auth|method-not-supported";
        AUTH_GENESYS_ENVIRONMENT_REQUIRED: "auth|genesys-environment-required";
        AUTH_GENERIC_API_KEY_REQUIRED: "auth|generic-api-key-required";
        AUTH_CUSTOM_FUNCTION_REQUIRED: "auth|custom-function-required";
        AUTH_CUSTOM_PARAMETERS_MISSING: "auth|custom-parameters-missing";
        AUTH_CUSTOM_PARAMETERS_INVALID_TYPE: "auth|custom-parameters-invalid-type";
        AUTH_CUSTOM_PARAMETERS_EMPTY: "auth|custom-parameters-empty";
        AUTH_CUSTOM_PARAMETERS_INVALID_VALUE_TYPE: "auth|custom-parameters-invalid-value-type";
        CONFIG_DOMAIN_REQUIRED: "config|domain-required";
        CONFIG_DOMAIN_INVALID_FORMAT: "config|domain-invalid-format";
        CONFIG_CONTAINER_ID_INVALID_TYPE: "config|container-id-invalid-type";
        UI_HANDLERS_BAD_CONFIG: "ui-handlers|bad-config";
        UI_HANDLERS_METHOD_REQUIRED: "ui-handlers|method-required";
        UI_HANDLERS_NOT_INITIALIZED: "ui-handlers|not-initialized";
        PARAM_CUSTOMER_ID_INVALID_TYPE: "param|customer-id-invalid-type";
        SESSION_ALREADY_ACTIVE: "session|already-active";
        SESSION_NOT_FOUND: "session|not-found";
        SESSION_FAILED_TO_START: "session|failed-to-start";
        CALL_NOT_STARTED: "call|not-started";
        CALL_ALREADY_FINISHED: "call|already-finished";
        WIDGET_IFRAME_LOAD_FAILED: "widget|iframe-load-failed";
        WIDGET_IFRAME_NOT_FOUND: "widget|iframe-not-found";
        WIDGET_CONTAINER_NOT_FOUND: "widget|container-not-found";
        OPERATION_ALREADY_RUNNING: "operation|already-running";
        OPERATION_TIMEOUT: "operation|timeout";
        OPERATION_CONFLICT: "operation|conflict";
        OPERATION_ABORTED: "operation|aborted";
        VE_UNHANDLED_ERROR: "ve|unhandled-error";
        INVALID_ARGUMENT: "validation|invalid-argument";
        REQUIRED_FIELD_MISSING: "validation|required-field-missing";
    }>;
    readonly errorsDetails: Readonly<{
        "agent|already-initialized": {
            name: string;
            description: string;
            code: "agent|already-initialized";
        };
        "agent|not-initialized": {
            name: string;
            description: string;
            code: "agent|not-initialized";
        };
        "agent|not-authenticated": {
            name: string;
            description: string;
            code: "agent|not-authenticated";
        };
        "auth|method-not-supported": {
            name: string;
            description: string;
            code: "auth|method-not-supported";
        };
        "auth|genesys-environment-required": {
            name: string;
            description: string;
            code: "auth|genesys-environment-required";
        };
        "auth|generic-api-key-required": {
            name: string;
            description: string;
            code: "auth|generic-api-key-required";
        };
        "auth|custom-function-required": {
            name: string;
            description: string;
            code: "auth|custom-function-required";
        };
        "auth|custom-parameters-missing": {
            name: string;
            description: string;
            code: "auth|custom-parameters-missing";
        };
        "auth|custom-parameters-invalid-type": {
            name: string;
            description: string;
            code: "auth|custom-parameters-invalid-type";
        };
        "auth|custom-parameters-empty": {
            name: string;
            description: string;
            code: "auth|custom-parameters-empty";
        };
        "auth|custom-parameters-invalid-value-type": {
            name: string;
            description: string;
            code: "auth|custom-parameters-invalid-value-type";
        };
        "config|domain-required": {
            name: string;
            description: string;
            code: "config|domain-required";
        };
        "config|domain-invalid-format": {
            name: string;
            description: string;
            code: "config|domain-invalid-format";
        };
        "config|container-id-invalid-type": {
            name: string;
            description: string;
            code: "config|container-id-invalid-type";
        };
        "ui-handlers|bad-config": {
            name: string;
            description: string;
            code: "ui-handlers|bad-config";
        };
        "ui-handlers|method-required": {
            name: string;
            description: string;
            code: "ui-handlers|method-required";
        };
        "ui-handlers|not-initialized": {
            name: string;
            description: string;
            code: "ui-handlers|not-initialized";
        };
        "param|customer-id-invalid-type": {
            name: string;
            description: string;
            code: "param|customer-id-invalid-type";
        };
        "session|already-active": {
            name: string;
            description: string;
            code: "session|already-active";
        };
        "session|not-found": {
            name: string;
            description: string;
            code: "session|not-found";
        };
        "session|failed-to-start": {
            name: string;
            description: string;
            code: "session|failed-to-start";
        };
        "call|not-started": {
            name: string;
            description: string;
            code: "call|not-started";
        };
        "call|already-finished": {
            name: string;
            description: string;
            code: "call|already-finished";
        };
        "widget|iframe-load-failed": {
            name: string;
            description: string;
            code: "widget|iframe-load-failed";
        };
        "widget|iframe-not-found": {
            name: string;
            description: string;
            code: "widget|iframe-not-found";
        };
        "widget|container-not-found": {
            name: string;
            description: string;
            code: "widget|container-not-found";
        };
        "operation|already-running": {
            name: string;
            description: string;
            code: "operation|already-running";
        };
        "operation|timeout": {
            name: string;
            description: string;
            code: "operation|timeout";
        };
        "operation|conflict": {
            name: string;
            description: string;
            code: "operation|conflict";
        };
        "operation|aborted": {
            name: string;
            description: string;
            code: "operation|aborted";
        };
        "ve|unhandled-error": {
            name: string;
            description: string;
            code: "ve|unhandled-error";
        };
        "validation|invalid-argument": {
            name: string;
            description: string;
            code: "validation|invalid-argument";
        };
        "validation|required-field-missing": {
            name: string;
            description: string;
            code: "validation|required-field-missing";
        };
    }>;
    isValidCode(code: string): code is "agent|already-initialized" | "agent|not-initialized" | "agent|not-authenticated" | "auth|method-not-supported" | "auth|genesys-environment-required" | "auth|generic-api-key-required" | "auth|custom-function-required" | "auth|custom-parameters-missing" | "auth|custom-parameters-invalid-type" | "auth|custom-parameters-empty" | "auth|custom-parameters-invalid-value-type" | "config|domain-required" | "config|domain-invalid-format" | "config|container-id-invalid-type" | "ui-handlers|bad-config" | "ui-handlers|method-required" | "ui-handlers|not-initialized" | "param|customer-id-invalid-type" | "session|already-active" | "session|not-found" | "session|failed-to-start" | "call|not-started" | "call|already-finished" | "widget|iframe-load-failed" | "widget|iframe-not-found" | "widget|container-not-found" | "operation|already-running" | "operation|timeout" | "operation|conflict" | "operation|aborted" | "ve|unhandled-error" | "validation|invalid-argument" | "validation|required-field-missing";
    getErrorDetails(code: "agent|already-initialized" | "agent|not-initialized" | "agent|not-authenticated" | "auth|method-not-supported" | "auth|genesys-environment-required" | "auth|generic-api-key-required" | "auth|custom-function-required" | "auth|custom-parameters-missing" | "auth|custom-parameters-invalid-type" | "auth|custom-parameters-empty" | "auth|custom-parameters-invalid-value-type" | "config|domain-required" | "config|domain-invalid-format" | "config|container-id-invalid-type" | "ui-handlers|bad-config" | "ui-handlers|method-required" | "ui-handlers|not-initialized" | "param|customer-id-invalid-type" | "session|already-active" | "session|not-found" | "session|failed-to-start" | "call|not-started" | "call|already-finished" | "widget|iframe-load-failed" | "widget|iframe-not-found" | "widget|container-not-found" | "operation|already-running" | "operation|timeout" | "operation|conflict" | "operation|aborted" | "ve|unhandled-error" | "validation|invalid-argument" | "validation|required-field-missing"): {
        name: string;
        description: string;
        code: "agent|already-initialized";
    } | {
        name: string;
        description: string;
        code: "agent|not-initialized";
    } | {
        name: string;
        description: string;
        code: "agent|not-authenticated";
    } | {
        name: string;
        description: string;
        code: "auth|method-not-supported";
    } | {
        name: string;
        description: string;
        code: "auth|genesys-environment-required";
    } | {
        name: string;
        description: string;
        code: "auth|generic-api-key-required";
    } | {
        name: string;
        description: string;
        code: "auth|custom-function-required";
    } | {
        name: string;
        description: string;
        code: "auth|custom-parameters-missing";
    } | {
        name: string;
        description: string;
        code: "auth|custom-parameters-invalid-type";
    } | {
        name: string;
        description: string;
        code: "auth|custom-parameters-empty";
    } | {
        name: string;
        description: string;
        code: "auth|custom-parameters-invalid-value-type";
    } | {
        name: string;
        description: string;
        code: "config|domain-required";
    } | {
        name: string;
        description: string;
        code: "config|domain-invalid-format";
    } | {
        name: string;
        description: string;
        code: "config|container-id-invalid-type";
    } | {
        name: string;
        description: string;
        code: "ui-handlers|bad-config";
    } | {
        name: string;
        description: string;
        code: "ui-handlers|method-required";
    } | {
        name: string;
        description: string;
        code: "ui-handlers|not-initialized";
    } | {
        name: string;
        description: string;
        code: "param|customer-id-invalid-type";
    } | {
        name: string;
        description: string;
        code: "session|already-active";
    } | {
        name: string;
        description: string;
        code: "session|not-found";
    } | {
        name: string;
        description: string;
        code: "session|failed-to-start";
    } | {
        name: string;
        description: string;
        code: "call|not-started";
    } | {
        name: string;
        description: string;
        code: "call|already-finished";
    } | {
        name: string;
        description: string;
        code: "widget|iframe-load-failed";
    } | {
        name: string;
        description: string;
        code: "widget|iframe-not-found";
    } | {
        name: string;
        description: string;
        code: "widget|container-not-found";
    } | {
        name: string;
        description: string;
        code: "operation|already-running";
    } | {
        name: string;
        description: string;
        code: "operation|timeout";
    } | {
        name: string;
        description: string;
        code: "operation|conflict";
    } | {
        name: string;
        description: string;
        code: "operation|aborted";
    } | {
        name: string;
        description: string;
        code: "ve|unhandled-error";
    } | {
        name: string;
        description: string;
        code: "validation|invalid-argument";
    } | {
        name: string;
        description: string;
        code: "validation|required-field-missing";
    };
    isVeError(error: unknown): error is VideoEngagerError;
};
type VideoEngagerAgentError = InstanceType<typeof VideoEngagerAgentError>;

declare const VERSION: "1.0.0";

/**
 * VideoEngager Agent - Main class for integrating VideoEngager widget into applications
 *
 * @example
 * ```typescript
 * // Initialize with generic auth
 * await VideoEngagerAgent.init({
 *   authMethod: 'generic',
 *   apiKey: 'your-api-key',
 *   domain: 'your-domain.com',
 *   agentEmail: 'agent@example.com'
 * });
 *
 * // Start a call
 * await VideoEngagerAgent.getInstance().call({ customerId: 'customer-123' });
 *
 * // Listen to events
 * VideoEngagerAgent.getInstance().on('sessionStarted', (callState) => {
 *   console.log('Session started:', callState);
 * });
 * ```
 */
declare class VideoEngagerAgent<T extends AuthProviderTypes = 'generic'> {
    private logger;
    private eventEmitter;
    protected authParameters?: Record<string, any>;
    protected promiseManager: PromiseManager;
    protected PromiseManager: typeof PromiseManager;
    static readonly VERSION: "1.0.0";
    protected configs: VeAgentOptions<T>;
    private static _instance;
    protected _isInitialized: boolean;
    private cleanups;
    protected get defaultCallState(): CallState;
    protected callState: CallState;
    private constructor();
    /**
     * Gets the singleton instance of VideoEngagerAgent
     *
     * @template T - The authentication provider type
     * @returns The singleton instance of VideoEngagerAgent
     *
     * @example
     * ```typescript
     * const agent = VideoEngagerAgent.getInstance();
     * ```
     */
    static getInstance<T extends AuthProviderTypes>(): VideoEngagerAgent<T>;
    /**
   * Initializes the VideoEngager Agent with the provided configuration
   * Can be called multiple times to reinitialize after cleanup
   *
   * @template T - The authentication provider type
   * @param configs - Configuration options for the agent
   * @throws {VideoEngagerAgentError} When agent is already initialized or configuration is invalid
   *
   * @example
   * ```typescript
   * // Initial setup
   * await VideoEngagerAgent.init({
   *   authMethod: 'generic',
   *   apiKey: 'your-api-key',
   *   domain: 'your-domain.com'
   * });
   *
   * // After destroy, can reinitialize
   * await VideoEngagerAgent.destroy();
   * await VideoEngagerAgent.init(newConfigs); // ✅ Works (new instance)
   * ```
   */
    static init<T extends AuthProviderTypes>(configs: VeAgentOptions<T extends undefined ? 'generic' : T>): Promise<void>;
    /**
     * Transforms Promise Manager errors to VideoEngager Agent errors
     */
    protected handlerErrors: (error: unknown) => VideoEngagerAgentError;
    protected initialize(configs: VeAgentOptions<T>): Promise<void>;
    protected registerSmartVideoEvents(): void;
    protected updateCallState(payload: EventPayload<EVENTS_NAMES>, emitUpdate?: boolean): void;
    protected handleStatusEvent<T extends EVENTS_NAMES>(payload: EventPayload<T>): Promise<void>;
    /**
     * Initiates a video call with the VideoEngager widget
     *
     * @param param - Optional parameters for the call
     * @param param.customerId - Customer identifier to associate with the call
     * @returns Promise that resolves when the call widget is successfully opened
     * @throws {VideoEngagerAgentError} When agent is not initialized or parameters are invalid
     *
     * @example
     * ```typescript
     * // Start a call without customer ID
     * await agent.call();
     *
     * // Start a call with customer ID
     * await agent.call({ customerId: 'customer-123' });
     * ```
     */
    call(param?: {
        customerId?: string;
    }): Promise<void>;
    /**
     * Ends the current video call and closes the widget iframe
     * This method gracefully terminates an active session and cleans up the UI
     *
     * @returns Promise that resolves when the call is successfully ended
     * @throws {VideoEngagerAgentError} When agent is not initialized or authenticated
     *
     * @example
     * ```typescript
     * // End the current call
     * await agent.endCall();
     *
     * // Listen for session end event
     * agent.on('sessionEnded', (callState) => {
     *   console.log('Call ended:', callState);
     * });
     * ```
     */
    endCall(): Promise<void>;
    /**
     * Registers an event listener for VideoEngager events
     *
     * @param event - The event name to listen for
     * @param callback - The callback function to execute when the event is emitted
     * @returns Function to unregister the event listener
     *
     * @example
     * ```typescript
     * // Listen for session events
     * const unsubscribe = agent.on('sessionStarted', (callState) => {
     *   console.log('Session started:', callState);
     * });
     *
     * // Listen for call state updates
     * agent.on('callStateUpdated', (callState) => {
     *   console.log('Call state:', callState.status);
     * });
     *
     * // Unregister listener
     * unsubscribe();
     * ```
     */
    on: {
        <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void]) => void | Promise<void>, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void]) => void | Promise<void>, options?: {
            async?: boolean;
        } | undefined): () => void;
    };
    /**
     * Removes an event listener for VideoEngager events
     *
     * @param event - The event name to stop listening for
     * @param callback - The callback function to remove
     *
     * @example
     * ```typescript
     * const handleSessionStart = (callState) => {
     *   console.log('Session started:', callState);
     * };
     *
     * agent.on('sessionStarted', handleSessionStart);
     * // Later...
     * agent.off('sessionStarted', handleSessionStart);
     * ```
     */
    off: {
        <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
        <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
    };
    /**
     * Cleans up all resources and event listeners
     * Instance cannot be reused after cleanup
     * @example
     * ```typescript
     * // Clean up and reset
     * await agent.cleanup();
     *
     * ```
     */
    protected cleanup(): Promise<void>;
    /**
     * Checks if the agent is initialized and ready to use
     *
     * @returns True if the agent is initialized, false otherwise
     *
     * @example
     * ```typescript
     * if (agent.isInitialized()) {
     *   await agent.call();
     * } else {
     *   await agent.initialize(configs);
     * }
     * ```
     */
    isInitialized(): boolean;
    /**
   * Static method to initiate a video call
   * Always delegates to the current singleton instance
   *
   * @param param - Optional parameters for the call
   * @throws {VideoEngagerAgentError} When agent is not initialized
   *
   * @example
   * ```typescript
   * import { VideoEngagerAgent } from '@videoengager/agent';
   *
   * // Safe to use even after destroy/cleanup
   * await VideoEngagerAgent.call({ customerId: 'customer-123' });
   * ```
   */
    static call(...args: Parameters<VideoEngagerAgent['call']>): ReturnType<VideoEngagerAgent['call']>;
    /**
     * Static method to end the current video call
     * Always delegates to the current singleton instance
     *
     * @throws {VideoEngagerAgentError} When agent is not initialized or no active session
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * // End the current call programmatically
     * await VideoEngagerAgent.endCall();
     * ```
     */
    static endCall(...args: Parameters<VideoEngagerAgent['endCall']>): ReturnType<VideoEngagerAgent['endCall']>;
    /**
     * Static method to register an event listener
     * Always delegates to the current singleton instance
     *
     * @param event - The event name to listen for
     * @param callback - The callback function to execute when the event is emitted
     * @returns Function to unregister the event listener
     * @throws {VideoEngagerAgentError} When agent is not initialized
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * // Safe to use even after destroy/cleanup
     * const unsubscribe = VideoEngagerAgent.on('sessionStarted', (callState) => {
     *   console.log('Session started:', callState);
     * });
     * ```
     */
    static on: EventEmitter<VeEventMap>['on'];
    /**
     * Static method to remove an event listener
     * Always delegates to the current singleton instance
     *
     * @param event - The event name to stop listening for
     * @param callback - The callback function to remove
     * @throws {VideoEngagerAgentError} When agent is not initialized
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * VideoEngagerAgent.off('sessionStarted', myHandler);
     * ```
     */
    static off: EventEmitter<VeEventMap>['off'];
    /**
     * Checks if the current singleton instance is initialized
     *
     * @returns True if instance exists and is initialized, false otherwise
     *
     * @example
     * ```typescript
     * if (VideoEngagerAgent.isInitialized()) {
     *   await VideoEngagerAgent.call();
     * } else {
     *   await VideoEngagerAgent.init(configs);
     * }
     * ```
     */
    static isInitialized(): boolean;
    /**
     * Destroys the singleton instance and cleans up all resources
     * Use this for complete cleanup when the agent will no longer be used in the application
     *
     * **This operation is NOT RECOVERABLE** - after destroy, you must create a new instance
     *
     * @example
     * ```typescript
     * // Complete destruction (not recoverable)
     * await VideoEngagerAgent.destroy();
     *
     * // After destroy, getInstance() will create a NEW uninitialized instance
     * const newAgent = VideoEngagerAgent.getInstance(); // New instance
     * await VideoEngagerAgent.init(configs); // Must initialize again
     * ```
     */
    static destroy(): Promise<void>;
    protected get handlersUi(): VeAgentUiHandlers;
}
/**
 * Initialize the VideoEngager Agent with configuration
 * This is a convenience export that calls VideoEngagerAgent.init()
 *
 * @example
 * ```typescript
 * import { init } from '@videoengager/agent';
 *
 * await init({
 *   authMethod: 'generic',
 *   apiKey: 'your-api-key',
 *   domain: 'your-domain.com'
 * });
 * ```
 */
declare const init: typeof VideoEngagerAgent.init;
/**
 * Get the singleton instance of VideoEngager Agent
 * This is a convenience export that calls VideoEngagerAgent.getInstance()
 *
 * @example
 * ```typescript
 * import { getInstance } from '@videoengager/agent';
 *
 * const agent = getInstance();
 * await agent.call({ customerId: 'customer-123' });
 * ```
 */
declare const getInstance: typeof VideoEngagerAgent.getInstance;
/**
 * Check if the agent is initialized and ready to use
 * This method is safe to use even after destroy()
 *
 * @example
 * ```typescript
 * import { isInitialized } from '@videoengager/agent';
 *
 * if (isInitialized()) {
 *   // Safe to call methods
 * }
 * ```
 */
declare const isInitialized: typeof VideoEngagerAgent.isInitialized;
/**
 * Destroy the agent instance and clean up all resources
 * This is a convenience export that calls VideoEngagerAgent.destroy()
 * @note This operation is NOT RECOVERABLE - after destroy, you must create a new instance by
 * calling `VideoEngagerAgent.init()` again.
 * All existing event listeners will be removed.
 *
 * @example
 * ```typescript
 * import { destroy } from '@videoengager/agent';
 *
 * await destroy(); // Complete cleanup, not recoverable
 * ```
 */
declare const destroy: typeof VideoEngagerAgent.destroy;
/**
 * Start a video call using the default agent instance
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * @example
 * ```typescript
 * import { call } from '@videoengager/agent';
 *
 * // Safe to use even after VideoEngagerAgent.destroy()
 * await call({ customerId: 'customer-123' });
 * ```
 */
declare const call: typeof VideoEngagerAgent.call;
/**
 * End the current video call using the default agent instance
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * @example
 * ```typescript
 * import { endCall } from '@videoengager/agent';
 *
 * // End the current call programmatically
 * await endCall();
 * ```
 */
declare const endCall: typeof VideoEngagerAgent.endCall;
/**
 * Register an event listener on the default agent instance
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * @example
 * ```typescript
 * import { on } from '@videoengager/agent';
 *
 * const unsubscribe = on('sessionStarted', (callState) => {
 *   console.log('Session started:', callState);
 * });
 * ```
 */
declare const on: {
    <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void]) => void | Promise<void>, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void]) => void | Promise<void>, options?: {
        async?: boolean;
    } | undefined): () => void;
};
/**
 * Remove an event listener from the default agent instance
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @example
 * ```typescript
 * import { off } from '@videoengager/agent';
 *
 * off('sessionStarted', myHandler);
 * ```
 */
declare const off: {
    <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
    <K extends keyof VeEventMap>(event: K, handler: K extends keyof VeEventMap ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
};

export { VEErrorCodes, VEErrorDetails, VERSION, VideoEngagerAgent, VideoEngagerAgentError, call, VideoEngagerAgent as default, destroy, endCall, getInstance, init, isInitialized, off, on };
