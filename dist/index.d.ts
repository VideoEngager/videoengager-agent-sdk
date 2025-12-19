interface AgentBrokerageSettings {
    _id: string;
    visitorBackgroundUrl: string;
    chatOnly: boolean;
    showEmail: boolean;
    firstName: string;
    lastName: string;
    _account: Account;
    agentUrl: string;
    email: string;
    contactEmail: string;
    source: string;
    organizationId: string;
    tennantId: string;
    locations: any[];
    brokerageId: string;
    shortUrl: string;
    frontMessage: string;
    waitingMessage: string;
    chatMessage: string;
    loginScreen: LoginScreen;
    constTooltip: boolean;
    callWrapUp: boolean;
    torch: boolean;
    enableNextjsGenesysAnalyticsAttribute: boolean;
    backgroundUrl: string;
    presenceGroupsText: string;
    agentReplyTimeOut: number;
    defaultGroup: string;
    locale: string;
    startThreeWayCall: boolean;
    disableAnonymousThreeWayCall: boolean;
    disableAuthenticatedThreeWayCall: boolean;
    billingOptions: BillingOptions;
    _server: Server;
    randomTooltip: boolean;
    viewWidget: string;
    privateAccess: boolean;
    enablePrivate: boolean;
    enableReplaceVideoTracks: boolean;
    hideStatus: boolean;
    cameraOn: boolean;
    agentCameraOn: boolean;
    recordingInNewTab: boolean;
    chatOriented: boolean;
    fullUrl: string;
    branding: Branding;
    internal: boolean;
    recording: Recording;
    signalling: Signalling;
    cobrowse: Cobrowse;
    conference: Conference;
    fileTransfer: FileTransfer;
    noCallRedirectTimeoutSec: number;
    enablePin: boolean;
    pin_shorturl: string;
    isPopup: boolean;
    newTheme: boolean;
    webrtcStatsConfigs: WebrtcStatsConfigs;
    aiSentimentConfigs: AiSentimentConfigs;
    disableAgentStatus: boolean;
    enablePrecallWorkflow: boolean;
    enablePoorConnectionDectect: boolean;
    enableGenesysKpiFeature: boolean;
    enableReportByExternalId: boolean;
    bandwidth: Bandwidth;
    safety: Safety;
    smsInvitation: SmsInvitation;
    enableEmiteKpiWorkaround: boolean;
    genesys: Genesys;
    scheduleConfig: ScheduleConfig;
    id: string;
}
interface Account {
    _id: string;
    source: string;
    contactEmail: string;
    organizationId: string;
    email: string;
    _acl: Acl;
    created: string;
    acl: Acl3;
    profile: Profile;
    token: Token;
    id: string;
}
interface Acl {
    name: string;
    _brokerages: string[];
    isVisible: boolean;
    acl: Acl2;
    __v: number;
    id: string;
}
interface Acl2 {
    menu: Menu;
    routes: Routes;
    features: Features;
}
interface Menu {
    my_profile: boolean;
    team_members: boolean;
    team_reports: boolean;
    restore_recordings_tenant: boolean;
    team_appointment_edit: boolean;
}
interface Routes {
    my_profile: boolean;
    recording_settings: boolean;
    integration: boolean;
    access_settings_tenant: boolean;
    recording_download: boolean;
    access_recordings_tenant: boolean;
    team_members: boolean;
    team_member_add: boolean;
    team_member_delete: boolean;
    manager_acls: boolean;
    partner_get: boolean;
    conference_settings: boolean;
    access_cdr_tenant: boolean;
    team_reports: boolean;
    manager_stats: boolean;
    team_member_edit: boolean;
    team_member_report: boolean;
    webrtc_config_settings: boolean;
    allow_sign_requests: boolean;
}
interface Features {
    allow_recording_processing: boolean;
    allowNetworkIndicatorsSettings: boolean;
}
interface Acl3 {
    menu: Menu2;
    routes: Routes2;
    features: Features2;
}
interface Menu2 {
    my_profile: boolean;
    team_members: boolean;
    team_reports: boolean;
    restore_recordings_tenant: boolean;
    team_appointment_edit: boolean;
}
interface Routes2 {
    my_profile: boolean;
    recording_settings: boolean;
    integration: boolean;
    access_settings_tenant: boolean;
    recording_download: boolean;
    access_recordings_tenant: boolean;
    team_members: boolean;
    team_member_add: boolean;
    team_member_delete: boolean;
    manager_acls: boolean;
    partner_get: boolean;
    conference_settings: boolean;
    access_cdr_tenant: boolean;
    team_reports: boolean;
    manager_stats: boolean;
    team_member_edit: boolean;
    team_member_report: boolean;
    webrtc_config_settings: boolean;
    allow_sign_requests: boolean;
}
interface Features2 {
    allow_recording_processing: boolean;
    allowNetworkIndicatorsSettings: boolean;
}
interface Profile {
    role: Role;
}
interface Role {
    name: string;
    _brokerages: string[];
    isVisible: boolean;
    acl: Acl4;
    __v: number;
    id: string;
}
interface Acl4 {
    menu: Menu3;
    routes: Routes3;
    features: Features3;
}
interface Menu3 {
    my_profile: boolean;
    team_members: boolean;
    team_reports: boolean;
    restore_recordings_tenant: boolean;
    team_appointment_edit: boolean;
}
interface Routes3 {
    my_profile: boolean;
    recording_settings: boolean;
    integration: boolean;
    access_settings_tenant: boolean;
    recording_download: boolean;
    access_recordings_tenant: boolean;
    team_members: boolean;
    team_member_add: boolean;
    team_member_delete: boolean;
    manager_acls: boolean;
    partner_get: boolean;
    conference_settings: boolean;
    access_cdr_tenant: boolean;
    team_reports: boolean;
    manager_stats: boolean;
    team_member_edit: boolean;
    team_member_report: boolean;
    webrtc_config_settings: boolean;
    allow_sign_requests: boolean;
}
interface Features3 {
    allow_recording_processing: boolean;
    allowNetworkIndicatorsSettings: boolean;
}
interface Token {
    _id: string;
    role: Role2;
}
interface Role2 {
    name: string;
    _brokerages: string[];
    isVisible: boolean;
    acl: Acl5;
    __v: number;
    id: string;
}
interface Acl5 {
    menu: Menu4;
    routes: Routes4;
    features: Features4;
}
interface Menu4 {
    my_profile: boolean;
    team_members: boolean;
    team_reports: boolean;
    restore_recordings_tenant: boolean;
    team_appointment_edit: boolean;
}
interface Routes4 {
    my_profile: boolean;
    recording_settings: boolean;
    integration: boolean;
    access_settings_tenant: boolean;
    recording_download: boolean;
    access_recordings_tenant: boolean;
    team_members: boolean;
    team_member_add: boolean;
    team_member_delete: boolean;
    manager_acls: boolean;
    partner_get: boolean;
    conference_settings: boolean;
    access_cdr_tenant: boolean;
    team_reports: boolean;
    manager_stats: boolean;
    team_member_edit: boolean;
    team_member_report: boolean;
    webrtc_config_settings: boolean;
    allow_sign_requests: boolean;
}
interface Features4 {
    allow_recording_processing: boolean;
    allowNetworkIndicatorsSettings: boolean;
}
interface LoginScreen {
    necessity: string;
    presentationDelay: number;
    autodimissTimeout: number;
    optionalFields: any[];
}
interface BillingOptions {
    expired: boolean;
}
interface Server {
    _id: string;
    server: Server2[];
}
interface Server2 {
    urls: string[];
    credential?: string;
    username?: string;
}
interface Branding {
    virtualBgConfigs: VirtualBgConfigs;
    customCss: CustomCss;
    visitorPrecallBanner: VisitorPrecallBanner;
    apexChat: ApexChat;
    buttons: Buttons;
    privacy: Privacy;
    recordingPrivacy: RecordingPrivacy;
    enableSendToParent: boolean;
    svBehaviorAllowed: boolean;
    isPipActive: boolean;
    allowEditInviteUrl: boolean;
    amazonActive: boolean;
    reconnectDisabled: boolean;
    logLevelToSend: string;
    virtualBackgrounds: VirtualBackground[];
    googleClientId: string;
    googleApi: string;
    linkedinAppId: string;
    facebookAppId: string;
    text: string;
    domainUrl: string;
    invalidUrl: string;
    genesysActive: boolean;
    genesysProperties: GenesysProperties;
    disablevideourlgeneration: boolean;
    agentCameraControl: boolean;
    visitorCameraControl: boolean;
    URL: string;
    logo: string;
    agentScreenShareControl: boolean;
    visitorScreenShareControl: boolean;
    videoRecording: VideoRecording;
    visitorBackgroundUrl: string;
    hideAgentRecordingIndicator: boolean;
    hideCustomerRecordingIndicator: boolean;
    visitorShowPrecall: boolean;
    redirectUrl: string;
    inviteUrl: string;
    customShortUrl: CustomShortUrl;
    talkdeskActive: boolean;
    zoomButton: boolean;
    agentCameraControlAudioOnly: boolean;
    visitorCameraControlAudioOnly: boolean;
    isAgentPipActive: boolean;
    exportInteractionsWithRec: boolean;
    nextjsMeetingInfo: boolean;
    activateCustomShortUrlNextjs: boolean;
    activateCustomSnapshot: boolean;
    customSnapshot: CustomSnapshot;
    activateVisitorPrecallBanner: boolean;
    callScreenUiV2: boolean;
    enableShowNames: boolean;
    allowAgentLeave: boolean;
    enableThreeWayLinkModeToggle: boolean;
    enableAiSentiment: boolean;
    enforceBlur: boolean;
    allowRestoreRecordings: boolean;
    enablePostCallFeedback: boolean;
    enableAiServices: boolean;
    callScreenUiV3: boolean;
    enableAgentBadge: boolean;
}
interface VirtualBgConfigs {
    mainJsUrl: string;
    targetFps: number;
}
interface CustomCss {
    agentCustomCss: string;
    enabled: boolean;
    visitorCustomCss: string;
    csses: Css[];
}
interface Css {
    created: number;
    id: string;
    url: string;
}
interface VisitorPrecallBanner {
    enabled: boolean;
    rightImageURL: string;
    leftImageURL: string;
}
interface ApexChat {
    routingPrefs: any[];
    timeOut: number;
    enabled: boolean;
}
interface Buttons {
    "wd-v-annotation-feature": boolean;
    "wd-v-transfer": boolean;
    "wd-v-share": boolean;
    "wd-v-snapshot": boolean;
    "wd-v-video": boolean;
    "wd-v-annotation": boolean;
    "wd-v-blur": boolean;
    "wd-v-snapshot-custom": boolean;
}
interface Privacy {
    endUserConsent: EndUserConsent;
    enable: boolean;
}
interface EndUserConsent {
    text: Text;
    privacyPolicyButtonText: PrivacyPolicyButtonText;
    showConsentButtonText: ShowConsentButtonText;
    minimizeButtonText: MinimizeButtonText;
    privacyPolicyURL: PrivacyPolicyUrl;
    dismissButtonText: DismissButtonText;
}
interface Text {
    en_US: string;
    "de-CH": string;
    pt_PT: string;
}
interface PrivacyPolicyButtonText {
    en_US: string;
    "de-CH": string;
    pt_PT: string;
}
interface ShowConsentButtonText {
    en_US: string;
}
interface MinimizeButtonText {
    en_US: string;
}
interface PrivacyPolicyUrl {
    en_US: string;
    "de-CH": string;
    pt_PT: string;
}
interface DismissButtonText {
    en_US: string;
    "de-CH": string;
    pt_PT: string;
}
interface RecordingPrivacy {
    endUserConsent: EndUserConsent2;
    activated: boolean;
    enabled: boolean;
}
interface EndUserConsent2 {
    text: Text2;
    minimizeButtonText: MinimizeButtonText2;
}
interface Text2 {
    en_US: string;
}
interface MinimizeButtonText2 {
    en_US: string;
}
interface VirtualBackground {
    label: string;
    type?: string;
    url: string;
    id: string;
    created?: number;
    lastEdit?: number;
}
interface GenesysProperties {
    chat: boolean;
}
interface VideoRecording {
    Customer: Customer;
    Agent: Agent;
}
interface Customer {
    enabled: boolean;
}
interface Agent {
    enabled: boolean;
}
interface CustomShortUrl {
    enabled: boolean;
    url: string;
    env: string;
}
interface CustomSnapshot {
    customSnapshotUrl: string;
}
interface Recording {
    enable: boolean;
    mandatory: boolean;
    mixWithSingleCommand: boolean;
    withTranscription: boolean;
    finalHeight: number;
    vcodec: string;
    debug: boolean;
    address: string;
    service: string;
    archiveServiceEndpoint: string;
    tag: string;
    mixer: boolean;
    prefix: string;
    path: string;
    format: string;
    maxVideoBandwidth: number;
    minVideoBandwidth: number;
    finalStorageConfig: FinalStorageConfig;
    sourceStorageConfig: SourceStorageConfig;
    playbackStorageConfig: PlaybackStorageConfig;
    archiveTasks: ArchiveTask[];
    stateUpdateWebhook: string[];
}
interface FinalStorageConfig {
    overrideDefaults: boolean;
    storage: Storage;
}
interface Storage {
    storageType: string;
    relativePath: string;
    s3: S3;
}
interface S3 {
    region: string;
    bucket: string;
}
interface SourceStorageConfig {
    overrideDefaults: boolean;
}
interface PlaybackStorageConfig {
    overrideDefaults: boolean;
    storage: Storage2;
}
interface Storage2 {
    storageType: string;
    relativePath: string;
    s3: S32;
}
interface S32 {
    region: string;
    bucket: string;
}
interface ArchiveTask {
    action: string;
    operation: Operation;
    source: Source;
    target: Target;
    idSet: boolean;
    id: string;
}
interface Operation {
    executionsCount: number;
    batchLimit: number;
    recordingsOlderThan: number;
    recordingsNotOlderThan: number;
}
interface Source {
    recordingState: string;
    storage: Storage3;
}
interface Storage3 {
    storageType: string;
    relativePath: string;
}
interface Target {
    recordingStateOnFail: string;
    recordingStateOnSuccess: string;
}
interface Signalling {
    endPoint: string;
    pickUpEndPoint: string;
    stickySetEndPoint: string;
    cookieMaxAge: number;
}
interface Cobrowse {
    enabled: boolean;
    api: string;
    license: string;
    publicKey: string;
}
interface Conference {
    enabled: boolean;
    serviceProvider: string;
    iframeConfigs: IframeConfigs;
    appId: string;
    allowJoinBeforeStart: number;
    publicKey: string;
}
interface IframeConfigs {
    configs: Configs;
}
interface Configs {
    toolbarButtons: string[];
    subject: string;
    defaultLogoUrl: string;
}
interface FileTransfer {
    enable: boolean;
    disableAgent: boolean;
    disableVisitor: boolean;
}
interface WebrtcStatsConfigs {
    visitor: Visitor;
    agent: Agent2;
}
interface Visitor {
    constraints: Constraints;
    enableStatsCollection: boolean;
    enableStatsSaveToDb: boolean;
    enableQualityIndicators: boolean;
    statsCollectionInterval: number;
}
interface Constraints {
    facingMode: string;
    width: number;
    frameRate: number;
}
interface Agent2 {
    enableStatsCollection: boolean;
    enableStatsSaveToDb: boolean;
    enableQualityIndicators: boolean;
    statsCollectionInterval: number;
    constraints?: Constraints;
}
interface AiSentimentConfigs {
    sentimentScoreWeights: SentimentScoreWeights;
    enableAiSentiment: boolean;
    fps: number;
    modelUrl: string;
    calculateSentiment: boolean;
    sentimentScoreAlpha: number;
    displayType: string;
    algorytm: string;
    aggregationWindow: number;
    positiveThreshold: number;
    negativeThreshold: number;
    pushAnalyticsToBackendEvery: number;
}
interface SentimentScoreWeights {
    happy: number;
    poker: number;
    sad: number;
    surprised: number;
}
interface Bandwidth {
    threshold: number;
    warningMessage: string;
}
interface Safety {
    enable: boolean;
    disableRemoteCamera: boolean;
}
interface SmsInvitation {
    enabled: boolean;
    closeInteractionManually: boolean;
    messageTemplate: string;
    queueId: string;
}
interface Genesys {
    customBusinessData: CustomBusinessData;
    enabled: boolean;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    ORG_REGION: string;
    queueId: string;
    scriptId: string;
    agentQueueId: string;
    capacity: number;
    defaultDialCode: string;
    emailQueueId: string;
    emailSubj: string;
    availability: boolean;
    agentSendEmail: boolean;
    clientSendEmail: boolean;
    emailBody: string;
    interval: number;
    calendarJson: string;
    emailBodyCancel: string;
    agentOwnedCallbacks: boolean;
    allowAgentOCB: boolean;
    smartVideoSchedule: boolean;
    reminderEmail: boolean;
    reminderEmailBody: string;
    reminderEmailDuration: number;
    reminderEmailSubject: string;
    callbackPriority: number;
    routingSkills: boolean;
}
interface CustomBusinessData {
    data: string;
    mandatoryData: string;
}
interface ScheduleConfig {
    customBusinessData: CustomBusinessData2;
    enabled: boolean;
    capacity: number;
    interval: number;
    availability: boolean;
    emailSubj: string;
    defaultDialCode: string;
    clientSendEmail: boolean;
    agentSendEmail: boolean;
    emailBody: string;
    emailBodyCancel: string;
    calendarJson: string;
    smartVideoSchedule: boolean;
    callbackPriority: number;
    duration: number;
}
interface CustomBusinessData2 {
    data: string;
    mandatoryData: string;
}

type LoggerSink = Partial<{
    log: (path: string, ...args: unknown[]) => void;
    debug: (path: string, ...args: unknown[]) => void;
    info: (path: string, ...args: unknown[]) => void;
    warn: (path: string, ...args: unknown[]) => void;
    error: (path: string, ...args: unknown[]) => void;
}>;
type ExternalLoggerLike = Partial<Record<"log" | "debug" | "info" | "warn" | "error", (...args: any[]) => void>>;

/**
 * ContextTreeLogger
 *
 * A tree-scoped logger inspired by *hierarchical logger* systems (e.g. Log4j's logger hierarchy and
 * Python's hierarchical loggers). In these systems, loggers are arranged by name/path, and you can
 * create child loggers to represent increasingly specific scopes (module → component → feature).
 *
 * @see https://logging.apache.org/log4j/2.x/manual/architecture.html#LoggerHierarchy
 * @see https://docs.python.org/3/library/logging.html#logger-objects
 * @see https://en.wikipedia.org/wiki/Observer_pattern
 *
 * This implementation represents that hierarchy explicitly via `child(name)` and a precomputed `pathStr`
 * (e.g. `"UI/Call/RTC"`). Each instance logs within its scope without requiring the caller to repeat
 * the scope on every call.
 *
 * Sinks
 * -----
 * Log output is delegated to "sinks" (console-like objects with methods `{log, debug, info, warn, error}`).
 * This mirrors the idea of handlers/appenders in established logging frameworks (Log4j appenders,
 * Python logging handlers).
 *
 * The sink subscription mechanism is a direct application of the Observer/Event-Subscriber pattern:
 * the logger is the event source; sinks are observers that receive notifications on each log call.
 *
 * Performance model
 * -----------------
 * - Logging is a hot path: this logger intentionally forwards `(path, ...args)` directly to sinks.
 *   It does not format strings, serialize payloads, or allocate a "log event" object unless a sink chooses to.
 * - The scope path is computed once per logger instance (stored as `pathStr`) to avoid repeated `join()` cost.
 *
 * Examples
 * --------
 * ```ts
 * const root = createLogger().logger;
 *
 * // tree scoping
 * const log = root.child("UI").child("Call").child("RTC");
 *
 * log.info("peer connection created", { pcId });
 * // sinks receive: info("UI/Call/RTC", "peer connection created", { pcId })
 *
 * log.error("ice failed", err);
 * // sinks receive: error("UI/Call/RTC", "ice failed", err)
 * ```
 *
 * ```ts
 * // shared sinks across the tree
 * const mem = new MemorySink({ max: 1000, store: ["warn", "error"] });
 * root.addSink(mem);
 *
 * root.child("Auth").warn("token expiring soon");
 * root.child("RTC").error("ice failed");
 *
 * // consumer reads current state on demand
 * mem.reportData();
 * ```
 */
declare class ContextTreeLogger {
    private readonly pathStr;
    private readonly sep;
    /**
     * Internal list of sinks subscribed to this logger (shared across the tree).
     *
     * Rationale ->
     *
     * root.sinks  ─┐
     
     * childA.sinks ├──>  [ConsoleSink, MemorySink, ...]
     
     * childB.sinks ┘

     */
    private sinks;
    private tombstones;
    private readonly compactThreshold;
    parent?: ContextTreeLogger;
    constructor(opts?: {
        pathStr?: string;
        separator?: string;
        sinks?: Array<LoggerSink | null>;
        compactThreshold?: number;
        parent?: ContextTreeLogger;
    });
    getFinalParent(): ContextTreeLogger;
    private children;
    /**
     * Returns a child logger scoped under this logger.
     *
     * This mirrors hierarchical logger designs where loggers are organized
     * by name/path, and child loggers represent increasingly specific scopes
     * (e.g. module → component → feature).
     *
     * Child loggers share the same sink list as their parent. Adding or removing
     * a sink at any level affects the entire tree.
     *
     * Implementations may cache child instances by name to avoid repeated
     * allocations and repeated path concatenation. This optimization is safe
     * when child names are low-cardinality (static component names).
     *
     * @param name - Path segment to append to the current scope.
     * @returns A logger scoped to `currentScope/name`.
     *
     * @see https://logging.apache.org/log4j/2.x/manual/architecture.html#LoggerHierarchy
     * @see https://docs.python.org/3/library/logging.html#logging.getLogger
     */
    child(name: string): ContextTreeLogger;
    /**
     * Subscribes a sink to receive log calls.
     *
     * Sinks act as observers in an Observer/Event-Subscriber pattern.
     * The logger is the event source; sinks are listeners that receive
     * `(scopePath, ...args)` for each log call.
     *
     * This separation keeps the core logger minimal and fast while allowing
     * sinks to implement policy and side effects such as:
     * - formatting
     * - filtering by severity
     * - in-memory storage
     * - network transport
     *
     * @param sink - A console-like object implementing one or more log methods.
     * @returns Unsubscribe function that removes this sink.
     *
     * @see https://en.wikipedia.org/wiki/Observer_pattern
     */
    addSink(sink: LoggerSink): () => void;
    /**
     * Removes tombstones (null entries) from the internal sink list.
     *
     * Rationale:
     * - Sink removal uses lazy deletion (tombstones) to avoid O(n) array
     *   shifting on the logging hot path.
     * - Over time, tombstones increase iteration cost.
     * - `compact()` rebuilds the sink list into a dense array.
     *
     * This "lazy deletion + periodic compaction" technique is common in
     * performance-sensitive systems where iteration is frequent and removals
     * must be cheap.
     *
     * @see https://en.wikipedia.org/wiki/Lazy_deletion
     */
    private compact;
    /**
     * Emits a log message of type LOG within this logger's scope.
     * The logger forwards `(scopePath, ...args)` directly to sinks.
     * * Sinks decide how the log is handled (printed, stored, filtered, sent).
     *
     * @example
     * ```ts
     * logger.child("Auth").log("signed in", { userId });
     * // sink.log("Auth", "signed in", { userId })
     * ```
     */
    log(...args: unknown[]): void;
    /**
     * Emits a log message of type DEBUG within this logger's scope.
     * The logger forwards `(scopePath, ...args)` directly to sinks.
     * * Sinks decide how the log is handled (printed, stored, filtered, sent).
     * @example
     * ```ts
     * logger.child("RTC").debug("peer connection created", { pcId });
     * // sink.debug("RTC", "peer connection created", { pcId })
     * ```
     */
    debug(...args: unknown[]): void;
    /**
     * Emits a log message of type INFO within this logger's scope.
     * The logger forwards `(scopePath, ...args)` directly to sinks.
     * * Sinks decide how the log is handled (printed, stored, filtered, sent).
     * @example
     * ```ts
     * logger.child("RTC").info("peer connection created", { pcId });
     * // sink.info("RTC", "peer connection created", { pcId })
     * ```
     */
    info(...args: unknown[]): void;
    /**
     * Emits a log message of type WARN within this logger's scope.
     * The logger forwards `(scopePath, ...args)` directly to sinks.
     * * Sinks decide how the log is handled (printed, stored, filtered, sent).
     * @example
     * ```ts
     * logger.child("RTC").warn("peer connection created", { pcId });
     * // sink.warn("RTC", "peer connection created", { pcId })
     * ```
     */
    warn(...args: unknown[]): void;
    /**
     * Emits a log message of type ERROR within this logger's scope.
     * The logger forwards `(scopePath, ...args)` directly to sinks.
     * * Sinks decide how the log is handled (printed, stored, filtered, sent).
     * @example
     * ```ts
     * logger.child("RTC").error("peer connection created", { pcId });
     * // sink.error("RTC", "peer connection created", { pcId })
     * ```
     */
    error(...args: unknown[]): void;
    /**
     * Dispatches `(path, ...args)` to each sink.
     *
     * Notes:
     * - The logger intentionally does not create event objects or timestamps; sinks can enrich
     *   or store data as needed (e.g., MemorySink adds timestamp).
     * - If a sink does not implement the specific method, we fall back to `sink.log` if present.
     */
    private dispatch;
    /**
     * Releases resources owned by this logger instance.
     *
     * Important:
     * - This does NOT remove sinks (shared across the tree) and does NOT affect other loggers.
     * - This primarily clears the cached children map to allow GC to reclaim unused subtrees.
     */
    destroy(opts?: {
        recursive?: boolean;
    }): void;
    get methods(): readonly ["log", "debug", "info", "warn", "error"];
    static get methods(): readonly ["log", "debug", "info", "warn", "error"];
    /** @deprecated */
    withContext(): ContextTreeLogger;
    getLevel(): DeprecatedLevels;
    setLevel(_level: DeprecatedLevels): void;
}
type DeprecatedLevels = Readonly<{
    NONE: 0;
    ERROR: 1;
    WARN: 2;
    INFO: 3;
    DEBUG: 4;
}>;

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin MDN}
 */
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;
type HTMLAttributeReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
interface SingleScriptHTMLAttributes {
    async?: boolean | undefined;
    blocking?: "render" | (string & {}) | undefined;
    /** @deprecated */
    charSet?: string | undefined;
    crossOrigin?: CrossOrigin;
    defer?: boolean | undefined;
    fetchPriority?: "high" | "low" | "auto" | undefined;
    integrity?: string | undefined;
    noModule?: boolean | undefined;
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
    src: string;
    type?: string | undefined;
    id?: string | undefined;
}
type ScriptConfiguration<T extends BaseVariables> = {
    scripts: SingleScriptHTMLAttributes[];
    varsGetter: (w: Window) => T;
    logger: ContextTreeLogger;
    loggerName?: string;
    loadImmediately?: boolean;
};
type BaseVariables = Record<string, any>;

declare class ExternalScriptLoader<V extends BaseVariables> {
    readonly config: ScriptConfiguration<V>;
    readonly logger: ContextTreeLogger;
    protected iframe: HTMLIFrameElement | null;
    readonly id: string;
    loadPromise?: Promise<void>;
    loaded: boolean;
    loadFailed: boolean;
    constructor(config: ScriptConfiguration<V>);
    insureLoaded(): Promise<void> | void;
    protected _vars?: V;
    get vars(): V;
    private load;
    unload(): void;
}

/// <reference lib="dom" />
/**
 * Typings for server/push/client-bundle/push.js derived from the JS sources
 * under server/push and server/push/server/services.
 */

interface RequestError {
  name?: string;
  message?: string;
  noRetry?: boolean;
}

type RequestCallback<T = any> = (err?: RequestError | null, res?: T) => void;

type Realm = string | { type: string; id: string };

interface ConnectParams {
  url: string;
  tenantId: string;
  deviceId?: string;
  userId?: string;
  visitorId?: string;
  token?: string;
  opt?: Record<string, any>;
  reconnect?: {
    fast?: { count?: number; fixedWait?: number; randomWait?: number };
    slow?: { fixedWait?: number; randomWait?: number };
  };
  ping?: { pingTimeout?: number; pingInterval?: number };
  expiration?: number;
}
type PushClientEvents = 'Connected'
  | 'Failed'
  | 'SessionClosed'
  | 'Connecting'
  | 'WaitBeforeReconnect'
  | 'OpeningSession'
  | 'Disconnected'
  | 'Expired';
type PushClientWildCardEvent = `*`;
type PushClientEvent = PushClientEvents | PushClientWildCardEvent;


interface PresenceStub {
  pub(callback: RequestCallback, operation: string, realm: Realm, content: any, properties?: any): void;
}

interface PubSubStub {
  poll(callback: RequestCallback, realmId: Realm, version?: number): void;
  cancel(callback: RequestCallback, realms: Realm | Realm[]): void;
}

type PubSubSetCallback = (realm: Realm, value: any) => void;
type PubSubUpdateCallback = (realm: Realm, value: any) => void;
type PubSubErrorCallback = (err: any) => void;

interface PubSubClient {
  subscribe(
    setCallback: PubSubSetCallback,
    updateCallback: PubSubUpdateCallback,
    errCallback: PubSubErrorCallback,
    realm: Realm,
    disableResubscribe?: boolean
  ): void;
  unsubscribe(realm: Realm): void;
  connected(): void;
  disconnected(reason: any): void;
}

interface PresenceClient {
  pubSubStub: PubSubStub;
  presenceStub: PresenceStub;
  set(callback: RequestCallback, content: any, realm?: Realm, properties?: any): void;
  mrg(callback: RequestCallback, content: any, realm?: Realm, properties?: any): void;
  poll(callback: RequestCallback, version?: number, realm?: Realm): void;
}

interface PresencePubSubClient {
  subscribe(realm: string, callback: (realm: string, data: any) => void): void;
  unsibscribe(realm: string): void;
}

interface SwitchClient {
  join(joinParams: any, userCallback: RequestCallback): void;
  leave(joinParams: any, userCallback: RequestCallback): void;
}

interface CallIceServer {
  urls: string | string[];
  username?: string;
  credential?: string;
}

interface CallOptions {
  audio?: boolean | MediaTrackConstraints;
  video?: boolean | MediaTrackConstraints;
  screen?: boolean;
  showChooseModal?: boolean;
}

interface StatsCollectionConfig {
  enableStatsCollection: boolean;
  enableStatsSaveToDb: boolean;
  enableQualityIndicators: boolean;
  statsCollectionInterval: number;
}

interface CallControl {
  getId(): string;
  accept(calleeInfo?: Record<string, any>, callstat?: any, preparedStream?: MediaStream | null): void;
  reject(reason?: string): void;
  mute(): void;
  unmute(): void;
  startVideo(): void;
  getLocalStream(): MediaStream | null | undefined;
  setLocalStream(stream?: MediaStream | null): void;
  startVideoExactUnsafe(softReplace: boolean, videoSource?: string, videoOff?: boolean): void;
  replaceLocalStreamWithCanvas(canvas: HTMLCanvasElement, frameRate?: number): void;
  restoreLocalStreamFromCanvas(): void;
  replaceLocalStreamWithCanvasStream(canvasStream: MediaStream): void;
  startVideoExact(videoSource?: string): void;
  stopVideo(): void;
  resumeVideo(): void;
  pauseVideo(): void;
  renegotiate(options: CallOptions): void;
  renegotiateReconnect(): void;
  hold(): void;
  resume(): void;
  isOnHold(): boolean;
  hangup(reason?: string): void;
  setLocalVideoElement(elementId: string): void;
  muteRemoteVideo(value: boolean): void;
  setRemoteVideoElement(elementId: string): void;
  setCallOptions(options: CallOptions): void;
  setIceServers(servers: CallIceServer[]): void;
  getStats(callback?: (result: any) => void): void;
  startStatsCollection(callback?: (result: any) => void, interval?: number): void;
  configureStatsCollection(config: Partial<StatsCollectionConfig>): void;
  stopStatsCollection(): void;
  initRecording(): void;
  startRecording(options: any, fileName: string): void;
  stopRecording(): void;
  startServerSideRecording(callback: RequestCallback): void;
  stopServerSideRecording(callback: RequestCallback): void;
  setExternalContext(context: any): void;
  on(event: string, callback: (...args: any[]) => void): void;
  once(event: string, callback: (...args: any[]) => void): void;
  sendCustomEvent(type: string, event: any, callback?: RequestCallback): void;
}

type IncomingCallHandler<TControl = CallControl> = (
  callControl: TControl,
  callerInfo: any,
  context: any
) => void;

interface CallService {
  connected(): void;
  registerCallType(
    callType: string,
    callTypeSpecific: {
      create(callServiceStub: any, onCleanup: () => void, eventLog: any): any;
      notify(callControl: CallControl, callerInfo: any, context: any): void;
    }
  ): void;
  onIncomingCall(callback: IncomingCallHandler): void;
  getRequestHandler(): (req: any) => void;
  chainPubCallbacks(set?: (value: any) => void, update?: (value: any) => void, err?: (reason: any) => void): void;
  onReturningVisitor(callback: (key: string, value: any, realm: string) => void): { get: (key: string) => any };
  onUserInfo(callback: (key: string, value: any, realm: string) => void): { get: (key: string) => any };
}

type CallUserCallback<TControl> = (err?: RequestError | null, call?: TControl) => void;

interface CallFactory<TControl = CallControl> {
  call(
    userCallback: CallUserCallback<TControl>,
    callerInfo?: Record<string, any>,
    to?: any,
    transfer?: any,
    callstat?: any,
    stream?: MediaStream
  ): void;
  callSession(
    userCallback: CallUserCallback<TControl>,
    sessionId: string,
    callerInfo?: Record<string, any>,
    to?: any
  ): void;
  pickup(userCallback: CallUserCallback<TControl>, callId: string): void;
}

interface CallClient {
  factory: CallFactory<CallControl>;
  service: CallService;
}

interface FileTransferInfo {
  name: string;
  type: string;
  size: number;
}

type FileTransferState =
  | 'initial'
  | 'accepted'
  | 'rejected'
  | 'canceled'
  | 'sending'
  | 'sendingCompleted'
  | 'completed';
type FileTransferFrontEvents = 'Accepted' | 'Canceled' | 'Completed' | 'Done' | 'Rejected' | 'Sending' | 'SentCancel' | 'Progress';

interface BaseFileTransferFrontApi {
  getId(): string;
  getFilesInfo(): FileTransferInfo[];
  getState(): FileTransferState;
  cancel(): void;
  on(event: FileTransferFrontEvents, handler: (...args: any[]) => void): void;
  once(event: FileTransferFrontEvents, handler: (...args: any[]) => void): void;
}

interface FileTransferPeerApi {
  on(event: 'TransferOffered' | 'ConnectionFailed' | 'ConnectionInitializationFiled' | string, handler: (...args: any[]) => void): void;
  add(files: File[]): BaseFileTransferFrontApi;
  setIceServers(servers: CallIceServer[]): void;
  closeConnection(): void;
}

interface ChatControl {
  getId(): string;
  accept(by?: any): void;
  reject(): void;
  sendMessage(msg: any, callback?: RequestCallback): void;
  sendCustomEvent(type: string, event: any, callback?: RequestCallback): void;
  close(reason?: any): void;
  on(
    event:
      | 'Established'
      | 'Ended'
      | 'Accepted'
      | 'Rejected'
      | 'AcceptedElsewhere'
      | 'Message'
      | 'PickedElsewhere'
      | 'PickupFailed'
      | string,
    callback: (...args: any[]) => void
  ): void;
  once(
    event:
      | 'Established'
      | 'Ended'
      | 'Accepted'
      | 'Rejected'
      | 'AcceptedElsewhere'
      | 'Message'
      | 'PickedElsewhere'
      | 'PickupFailed'
      | string,
    callback: (...args: any[]) => void
  ): void;
  fileTransferPeer: FileTransferPeerApi;
}

interface ChatService {
  onIncomingChat(callback: IncomingCallHandler<ChatControl>): void;
  getRequestHandler(): () => any;
}

interface ChatClient {
  factory: CallFactory<ChatControl>;
  service: ChatService;
}

interface ScreenShareService {
  onIncomingScreenShare(callback: IncomingCallHandler<CallControl>): void;
  getRequestHandler(): () => any;
}

interface ScreenShareClient {
  factory: CallFactory<CallControl>;
  service: ScreenShareService;
}

type ConferenceEvent = 'Created' | 'Joined' | 'Updated' | 'Left' | 'Ended';

interface ConferenceClient {
  conferenceStub: {
    getId(): string;
    create(expiresAt: number, conferenceId: string, info: any, callback: RequestCallback): void;
    getOrCreate(expiresAt: number, conferenceId: string, info: any, callback: RequestCallback): void;
    join(partyInfo: any, callback: RequestCallback): void;
    update(partyInfo: any, callback: RequestCallback): void;
    leave(callback: RequestCallback): void;
    end(callback: RequestCallback): void;
  };
  getId(): string;
  create(expiresAt: number, conferenceId: string, info: any, callback: RequestCallback): void;
  getOrCreate(expiresAt: number, conferenceId: string, info: any, callback: RequestCallback): void;
  join(partyInfo: PartyInfo, callback: RequestCallback): void;
  update(partyInfo: any, callback: RequestCallback): void;
  leave(callback: RequestCallback): void;
  end(callback: RequestCallback): void;
  on(event: ConferenceEvent | string, callback: () => void): void;
}

interface AutomaticCallHandler {
  onlineVisitors: Map<string, any>;
  init(visitorId?: string, activate?: boolean): void;
  activate(active?: boolean): void;
  setVisitorId(visitorId: string): void;
  stateCallingOnEntryEvent(): void;
  stateCallingOnLeaveEvent(): void;
  statePresenceOnlineEvent(): void;
  statePresenceOfflineEvent(): void;
  setActiveCall(callIsActive?: boolean): void;
  setPresence(isOnline: boolean): void;
  reset(): void;
  handlePresenceChanges(res: { getContent(): any; getId?: () => any }): void;
  on(event: string, handler: (...args: any[]) => void): void;
  once(event: string, handler: (...args: any[]) => void): void;
  emit(event: string, ...args: any[]): void;
  releaseGroup?(group: string): void;
}

interface ClientUtils {
  automaticCallHandler: AutomaticCallHandler;
}
type EventEmitterNormalHandler = (...args: any[]) => void;
type WildCardEventEmitterHandler = (event: PushClientEvents, ...args: any[]) => void;
type PushClientEventHandler<T extends PushClientEvent> = T extends PushClientWildCardEvent ? WildCardEventEmitterHandler : EventEmitterNormalHandler;
interface PushClient {
  connect(params: ConnectParams): void;
  reconnect(): void;
  disconnect(): void;
  presence: PresenceClient;
  pubSub: PubSubClient;
  presencePubSub: PresencePubSubClient;
  switch: SwitchClient;
  call: CallClient;
  chat: ChatClient;
  screenshare: ScreenShareClient;
  conference: ConferenceClient;
  setCallInfoCallbacks(set?: (value: any) => void, upd?: (value: any) => void, err?: (reason: any) => void): void;
  getSessionId(): string;
  on<T extends PushClientEvent>(event: T, callback: PushClientEventHandler<T>): void;
  off<T extends PushClientEvent>(event: T, callback?: PushClientEventHandler<T>): void;
  releaseGroup(group: string): void;
  initWebrtcSupport(webrtcReadyCb: (supported?: boolean) => void): void;
  onReturningVisitor: CallService['onReturningVisitor'];
  onUserInfo: CallService['onUserInfo'];
  utils: ClientUtils;
}

// export const push: PushGlobalObject;
// declare const push: PushGlobalObject;




/**
 * @typedef {Object} VisitorPartyInfo
 * @property {'visitor'} role
 * @property {string} displayName
 * @property {string} id - Unique visitor identifier (e.g., Interaction ID)
 */

/**
 * @typedef {Object} AgentPartyInfo
 * @property {'user'} role
 * @property {string} displayName
 * @property {string} id - Usually agent email (veContext.caller_email)
 */
type AgentPartyInfo = {
  role: 'user';
  displayName: string;
  id: string; // Usually agent email (veContext.caller_email)
  sId: string; // socket session id
};
type VisitorPartyInfo = {
  role: 'visitor';
  displayName: string;
  id: string; // Unique visitor identifier (e.g., Interaction ID)
  sId: string; // socket session id
};
type PartyInfo = VisitorPartyInfo | AgentPartyInfo;

// @ts-check
type EventMap$1<T> = Record<keyof T, any> | DefaultEventMap;
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
declare class EventEmitter<T extends EventMap$1<T> = DefaultEventMap> {
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

declare interface EventEmitter<T extends EventMap$1<T> = DefaultEventMap> {
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
     * Waits for a specific event to be emitted, with an optional timeout.
     * @param event The event name
     * @param timeoutMs Optional timeout in milliseconds (default: 5000ms) if timeoutMs is -1, wait indefinitely
     * @param filter Optional predicate to decide whether a payload should resolve the wait
     * @param onCancelBehavior Whether cancel() should resolve or reject the promise (default: 'resolve')
     * @returns An object containing a promise that resolves with the event payload and a cancel function
     */
    waitFor<K extends keyof T>(
        event: K,
        timeoutMs?: number,
        filter?: (payload: T[K]) => boolean,
        onCancelBehavior?: 'resolve' | 'reject'
    ): { promise: Promise<T[K]>; cancel: (resolvedValue?: T[K]) => void };

    /**
     * Waits for any one of multiple events to be emitted.
     * @param eventNames Array of event names to wait for
     * @param timeoutMs Optional timeout in milliseconds (default: 5000ms), -1 to wait indefinitely
     * @param filter Optional predicate to decide whether a payload should resolve the wait
     * @param onCancelBehavior Whether cancel() should resolve or reject the promise (default: 'resolve')
     * @returns An object containing a promise that resolves with the event name and payload, and a cancel function
     */
    waitForAny<K extends keyof T>(
        eventNames: readonly K[],
        timeoutMs?: number,
        filter?: (res: WaitForAnyResult<T, K>) => boolean,
        onCancelBehavior?: 'resolve' | 'reject'
    ): {
        promise: Promise<WaitForAnyResult<T, K>>;
        cancel: (resolvedValue?: any) => void;
    };

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
type WaitForAnyResult<T, K extends keyof T> =
    { [E in K]: { event: E; payload: T[E] } }[K];

type PushInitializeOptions = {
    logger?: ContextTreeLogger;
    pushClient: PushClient;
    component?: string;
};
type PushClientStateObj = {
    connected: boolean;
    sessionId: string | null;
    timetable?: string;
    inCallsQueue: boolean;
};
type PushClientStateKeys = keyof PushClientStateObj;
type EventMap = {
    [K in PushClientStateKeys as `state:${K}`]: PushClientStateObj[K];
};
declare const pushClientStateSymbol: unique symbol;

/**
 * Represents a subscriber instance for a component using the PushClientManager.
 * Each component that needs to track PushClient state should create its own subscriber.
 *
 * This class provides:
 * - Isolated event emitter per subscriber
 * - Proxy access to manager state
 * - Independent lifecycle management
 * - Convenient helper methods (waitForConnected, checkIfSessionIdIsMine)
 *
 * @remarks
 * Subscribers can be created BEFORE the PushClient is connected. They will automatically
 * receive state updates once the connection is established. This allows components to
 * initialize and subscribe early in their lifecycle without worrying about connection timing.
 *
 * @example
 * ```typescript
 * // Create subscriber in component initialization (before connection)
 * class MyComponent {
 *   private pushSubscriber: PushSubscribedInstance;
 *
 *   constructor(pushClient: PushClient) {
 *     // Subscribe immediately, even if not connected yet
 *     this.pushSubscriber = PushClientManager.createSubscriber({
 *       pushClient,
 *       component: 'MyComponent'
 *     });
 *
 *     // Listen for connection (will fire when connection happens)
 *     this.pushSubscriber.eventEmitter.on('state:connected', (connected) => {
 *       if (connected) {
 *         console.log('Now connected with session:', this.pushSubscriber.state.sessionId);
 *       }
 *     });
 *   }
 *
 *   async init() {
 *     // Wait for connection (can be called even before connection starts)
 *     await this.pushSubscriber.waitForConnected();
 *     console.log('Ready to use:', this.pushSubscriber.state.sessionId);
 *   }
 *
 *   async cleanup() {
 *     // Clean up when component unmounts
 *     await this.pushSubscriber.destroy();
 *   }
 * }
 *
 * // Meanwhile, somewhere else in the app, connect the PushClient
 * const manager = PushClientManager.initialize({ pushClient });
 * await manager.connect(connectionParams);
 * // All existing subscribers are automatically notified!
 * ```
 *
 * @example
 * ```typescript
 * // React component example
 * function MyReactComponent({ pushClient }: { pushClient: PushClient }) {
 *   const [connected, setConnected] = React.useState(false);
 *
 *   React.useEffect(() => {
 *     // Create subscriber when component mounts (before connection)
 *     const subscriber = PushClientManager.createSubscriber({
 *       pushClient,
 *       component: 'MyReactComponent'
 *     });
 *
 *     // Listen for state changes
 *     const unsubscribe = subscriber.eventEmitter.on('state:connected', setConnected);
 *
 *     // Cleanup on unmount
 *     return () => {
 *       unsubscribe();
 *       subscriber.destroy();
 *     };
 *   }, [pushClient]);
 *
 *   return <div>Connected: {connected ? 'Yes' : 'No'}</div>;
 * }
 * ```
 */
declare class PushSubscribedInstance {
    #private;
    /**
     * Optional name for this subscriber, used for logging and debugging.
     *
     * @public
     */
    component?: string;
    /**
     * Event emitter for state changes specific to this subscriber.
     * Receives proxied events from the parent PushClientManager.
     *
     * @public
     * @remarks
     * This emitter is isolated per subscriber, allowing independent event handling.
     * All events from the manager are automatically forwarded to this emitter.
     *
     * @example
     * ```typescript
     * subscriber.eventEmitter.on('state:connected', (connected) => {
     *   console.log('Connection changed:', connected);
     * });
     *
     * subscriber.eventEmitter.once('state:sessionId', (sessionId) => {
     *   console.log('First session ID received:', sessionId);
     * });
     * ```
     */
    eventEmitter: EventEmitter<EventMap>;
    /**
     * Gets the parent PushClientManager instance.
     *
     * @public
     * @returns The PushClientManager managing this subscriber
     */
    get pushClientManager(): PushClientManager;
    /**
     * Factory method to create a new subscribed instance.
     *
     * @internal
     * @param PushClientManager - The manager instance to subscribe to
     * @param component - Optional name for logging/debugging
     * @returns A new PushSubscribedInstance
     */
    static createSubscribedInstance(pushManager: PushClientManager, component: string | undefined): PushSubscribedInstance;
    private constructor();
    /**
     * Gets the current connection state from the parent manager.
     *
     * @public
     * @returns Object containing connected status and sessionId
     */
    get state(): PushClientStateObj;
    /**
     * Gets the underlying PushClient instance from the parent manager.
     *
     * @public
     * @returns The PushClient instance
     */
    get client(): PushClient;
    /** @internal */
    cleanup(): Promise<void>;
    /**
     * Destroys this subscribed instance and cleans up resources.
     * Removes all event listeners and unregisters from the parent manager.
     *
     * @public
     * @remarks
     * Should be called when the component using this subscriber is unmounted or no longer needs
     * PushClient state updates. The parent manager persists and can be used by other subscribers.
     *
     * @example
     * ```typescript
     * // In component cleanup/unmount
     * await subscriber.destroy();
     * ```
     */
    destroy(): Promise<void>;
    /**
     * Checks if a session ID belongs to the current user.
     * Convenience method that proxies to the parent manager.
     *
     * @public
     * @param sessionId - The session ID to check
     * @returns True if the session ID belongs to this user
     * @see {@linkcode PushClientManager.checkIfSessionIdIsMine}
     *
     * @example
     * ```typescript
     * if (subscriber.checkIfSessionIdIsMine(participantSessionId)) {
     *   console.log('This participant is me!');
     * }
     * ```
     */
    get checkIfSessionIdIsMine(): (sessionId: string) => boolean;
    /**
     * Waits for the PushClient to be connected.
     * Convenience method that proxies to the parent manager.
     *
     * @public
     * @param ms - Timeout in milliseconds
     * @returns Promise that resolves when connected
     * @see {@linkcode PushClientManager.waitForConnected}
     *
     * @example
     * ```typescript
     * await subscriber.waitForConnected(15000);
     * console.log('Connected! Session:', subscriber.state.sessionId);
     * ```
     */
    get waitForConnected(): (ms?: number) => Promise<boolean | void>;
}

/**
 * Manages PushClient connection state and provides a centralized singleton
 * for managing multiple subscribers to the same PushClient instance.
 *
 * This class handles:
 * - Connection state tracking (connected/disconnected, sessionId)
 * - Session ID caching for duplicate detection
 * - Event emission for state changes
 * - Multiple component subscriptions to a single PushClient
 *
 * @remarks
 * The manager uses a singleton pattern per PushClient instance, stored via Symbol.
 * Multiple components can subscribe before connection is established - they will
 * automatically receive state updates once the connection completes.
 *
 * @example
 * ```typescript
 * // Create a subscriber before connection (typical use case)
 * const subscriber = PushClientManager.createSubscriber({
 *   pushClient: myPushClient,
 *   component: 'MyComponent'
 * });
 *
 * // Listen for connection state changes
 * subscriber.eventEmitter.on('state:connected', (connected) => {
 *   console.log('Connected:', connected);
 * });
 *
 * // Get the manager and connect (can be done from anywhere)
 * const manager = PushClientManager.initialize({ pushClient: myPushClient });
 * await manager.connect({ tenantId: 'abc', env: 'production' });
 *
 * // Wait for connection from subscriber side
 * await subscriber.waitForConnected(15000);
 *
 * // Access state
 * console.log('Session ID:', subscriber.state.sessionId);
 *
 * // Cleanup when component unmounts
 * await subscriber.destroy();
 *
 * // Manually destroy manager when completely done
 * manager.destroy();
 * ```
 *
 * @example
 * ```typescript
 * // Multiple subscribers example
 * const sub1 = PushClientManager.createSubscriber({
 *   pushClient: myPushClient,
 *   component: 'Header'
 * });
 *
 * const sub2 = PushClientManager.createSubscriber({
 *   pushClient: myPushClient,
 *   component: 'ConferencePanel'
 * });
 *
 * // Both subscribers receive the same state updates
 * // Connect once, all subscribers are notified
 * const manager = PushClientManager.initialize({ pushClient: myPushClient });
 * await manager.connect(connectionParams);
 * ```
 */
declare class PushClientManager {
    #private;
    /**
     * Creates a new subscriber instance for the given PushClient.
     * If a manager doesn't exist for this PushClient, it will be created.
     * Subscribers can be created before the PushClient is connected.
     *
     * @public
     * @param opts - Configuration options including pushClient, optional logger, and component
     * @returns A new PushSubscribedInstance for the component to use
     * @throws Error if pushClient is not provided
     * @throws Error if the manager is already destroyed
     *
     * @example
     * ```typescript
     * const subscriber = PushClientManager.createSubscriber({
     *   pushClient: myPushClient,
     *   logger: customLogger
     * });
     *
     * subscriber.eventEmitter.on('state:connected', (connected) => {
     *   if (connected) {
     *     console.log('PushClient connected with session:', subscriber.state.sessionId);
     *   }
     * });
     * ```
     */
    static createSubscriber(opts: PushInitializeOptions): PushSubscribedInstance;
    /**
     * Initializes or retrieves the existing PushClientManager instance for the given PushClient.
     * Use this to get direct access to the manager for operations like connect() or destroy().
     *
     * @public
     * @param opts - Configuration options including pushClient and optional logger
     * @returns The PushClientManager singleton instance for this PushClient
     * @throws Error if pushClient is not provided
     *
     * @example
     * ```typescript
     * const manager = PushClientManager.initialize({
     *   pushClient: myPushClient,
     *   logger: customLogger
     * });
     *
     * await manager.connect({ tenantId: 'abc', env: 'prod' });
     * console.log('Manager state:', manager.state);
     * ```
     */
    static initialize(opts: Omit<PushInitializeOptions, 'component'>): PushClientManager;
    /**
     * Event emitter for state changes.
     * Emits events when connection state or sessionId changes.
     *
     * @public
     * @remarks
     * Available events:
     * - `state:connected` - Emitted when connection state changes (boolean)
     * - `state:sessionId` - Emitted when session ID changes (string | null)
     *
     * @example
     * ```typescript
     * manager.eventEmitter.on('state:connected', (connected) => {
     *   console.log('Connection state:', connected);
     * });
     *
     * manager.eventEmitter.on('state:sessionId', (sessionId) => {
     *   console.log('Session ID changed:', sessionId);
     * });
     * ```
     */
    eventEmitter: EventEmitter<EventMap>;
    /**
     * Gets the underlying PushClient instance being managed.
     *
     * @public
     * @returns The PushClient instance
     */
    get client(): PushClient;
    /**
     * Gets the current connection state of the PushClient.
     *
     * @public
     * @returns Object containing connected status and sessionId
     *
     * @example
     * ```typescript
     * console.log('Connected:', manager.state.connected);
     * console.log('Session ID:', manager.state.sessionId);
     * ```
     */
    get state(): PushClientStateObj;
    protected _state: PushClientStateObj;
    /**
    * @internal Maximum number of session IDs to cache for the current user.
    */
    protected MAX_CACHED_SESSION_IDS: number;
    protected _destroyed: boolean;
    /**
     * Indicates whether this manager instance has been destroyed.
     * Once destroyed, the manager cannot be used and a new one must be created.
     *
     * @public
     * @returns True if destroyed, false otherwise
     */
    get destroyed(): boolean;
    /** @internal */
    protected _logger: ContextTreeLogger;
    /** @internal */
    protected _client: PushClient;
    /** @internal */
    protected subscribedInstances: Set<PushSubscribedInstance>;
    private constructor();
    getTimeTableData(): Promise<string>;
    leaveCallsQueue(): Promise<void>;
    joinCallsQueue(force?: boolean): Promise<void> | void;
    registerSomeStuff(): void;
    /**
     * Connects the PushClient with the given connection parameters.
     * Waits for the connection to be established or times out after 30 seconds.
     *
     * @param connectionParams - Parameters required for connection
     * @throws Error if the connection fails or times out
     */
    connect(connectionParams: ConnectParams): Promise<void>;
    disconnect(): Promise<void>;
    /**
     * Immediately destroys the PushClientManager instance.
     * Clears all resources, removes PushClient listeners, and cleans up all subscribers.
     * The manager must be manually destroyed when no longer needed.
     *
     * @public
     * @remarks
     * This method:
     * - Removes all event listeners from the PushClient
     * - Cleans up all subscriber instances
     * - Shuts down the event emitter
     * - Clears the session ID cache
     * - Removes the manager reference from the PushClient
     *
     * @example
     * ```typescript
     * // Clean up when completely done with the manager
     * manager.destroy();
     * ```
     */
    destroy(): Promise<void>;
    /**
     * Checks if a session ID belongs to the current user.
     * Uses the cached session IDs set for validation.
     * Useful for detecting duplicate sessions or identifying if a participant is "me".
     *
     * @public
     * @param sessionId - The session ID to check
     * @returns True if the session ID belongs to this user, false otherwise
     *
     * @example
     * ```typescript
     * const isMine = manager.checkIfSessionIdIsMine('some-session-id');
     * if (isMine) {
     *   console.log('This session belongs to the current user');
     * }
     * ```
     */
    checkIfSessionIdIsMine(sessionId: string): boolean;
    /**
     * Waits for the PushClient to be connected.
     * Resolves immediately if already connected, otherwise waits for the connection event.
     *
     * @public
     * @param ms - Timeout in milliseconds. Default is 15000 (15 seconds). Use -1 for no timeout.
     * @returns Promise that resolves when connected
     * @throws Error if the manager is destroyed
     * @throws Error if the timeout is reached before connection
     *
     * @example
     * ```typescript
     * try {
     *   await manager.waitForConnected(10000);
     *   console.log('Connected! Session:', manager.state.sessionId);
     * } catch (error) {
     *   console.error('Connection timeout or failed');
     * }
     * ```
     */
    waitForConnected(ms?: number): Promise<boolean | void>;
    /**
     * Updates a state property and emits a change event if the value has changed.
     *
     * @internal
     * @param key - The state property key to update
     * @param value - The new value for the property
     */
    protected setState<K extends PushClientStateKeys>(key: K, value: PushClientStateObj[K]): void;
    /**
     * @internal
     * Adds a session ID to the cache and maintains the cache size.
     * Uses a FIFO approach to remove the oldest session ID when exceeding max size.
     * @param sessionId
     */
    protected addMySessionIdToCache(sessionId: string): void;
    /**
     * Retrieves and caches the current push client session ID.
     * Returns null if not connected or session is invalid.
     *
     * @internal
     * @returns The current session ID or null
     */
    protected getCurrentPushSessionId(): string | null;
    /**
     * Registers event listeners on the PushClient and initializes state.
     *
     * @internal
     */
    protected registerListeners(): void;
    /**
     * Adds a new subscriber instance to this manager.
     *
     * @internal
     * @param component - Optional name for logging/debugging purposes
     * @returns A new PushSubscribedInstance
     * @throws Error if the manager is destroyed
     */
    addSubscriber(component?: string): PushSubscribedInstance;
    /**
     * @public
     * Removes a subscriber from the manager.
     * The manager persists even when no subscribers remain and must be manually destroyed.
     *
     * @param subscribedInstance - The subscribed instance to remove
     */
    removeSubscriber(subscribedInstance: PushSubscribedInstance): void;
    /**
     * Cache of session IDs that belong to the current user.
     * Used for duplicate detection and session validation.
     *
     * @internal
     */
    private cachedSessionIds;
}
declare module "./push-client" {
    interface PushClient {
        [pushClientStateSymbol]?: PushClientManager;
    }
}

type CallInfo = {
    calls: Record<string, CallControl>;
    context: Record<string, unknown>;
    caller: {
        id: string;
        type: 'visitor';
    };
    displayName: string;
};
type CallsNotificationEvents = {
    /** Additional Events for Standalone Mode */
    incomingCall: CallInfo;
    acceptedElsewhere: {
        callId: string;
        visitorId: string;
        acceptedByUser?: string;
        acceptedByMyOtherDevice?: string;
    };
    callRemoved: string;
    partyLeft: string;
    inCallsQueue: boolean;
    isOnline: boolean;
};

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

type StandaloneConfiguration$1 = {
    standaloneMode: true;
    externalId: string;
    firstName?: string;
    lastName?: string;
    contactEmail?: string;
};
type NoStandaloneConfiguration$1 = {
    standaloneMode?: false;
};
type GenericAuthConfig = {
    authMethod: 'generic';
    apiKey: string;
    agentEmail: string;
    organizationId?: string;
} & (StandaloneConfiguration$1 | NoStandaloneConfiguration$1);
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

type StandaloneConfiguration = {
    standaloneMode: true;
};
type NoStandaloneConfiguration = {
    standaloneMode?: false;
};
type TokenAuthConfig = {
    authMethod: 'token';
    token: string;
} & (StandaloneConfiguration | NoStandaloneConfiguration);
declare class TokenAuth implements AuthenticationModuleImpl<'token', TokenAuthConfig> {
    readonly name: "token";
    configs: TokenAuthConfig;
    constructor(configs: TokenAuthConfig);
    authenticate(): {
        token: string;
    };
    validateConfigs(): void;
}

declare const authProviders: Readonly<{
    generic: typeof GenericAuth;
    genesys: typeof GenesysAuth;
    custom: typeof CustomAuth;
    token: typeof TokenAuth;
}>;
type AuthProviderTypes = keyof typeof authProviders | undefined;
type AuthProviderConfigs<T extends AuthProviderTypes> = InstanceType<typeof authProviders[T extends undefined ? 'generic' : T]>['configs'];

type DebugOptions = boolean | ExternalLoggerLike;

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
type UiHandlerConfig = {
    /** Custom Handler for platform-specific actions
     * Some frameworks and libraries might not support the default behavior (creating iframe and appending it to the container)
     * In such cases, you can provide your own handlers to open and close the iframe.
     * The `openIframe` method should create the iframe and append it to the container.
     * The `closeIframe` method should remove the iframe from the DOM.
     * The `getIframe` method should return the iframe element if it exists, or null
     */
    uiHandlers?: VeAgentUiHandlers;
    /** Custom container ID for the widget iframe (default: 'video-engager-container') */
    containerId?: string;
};
/**
 * Base configuration options for VideoEngager Agent
 */
type VeAgentBaseOptions = {
    options?: {} & UiHandlerConfig;
    /** VideoEngager domain to connect to */
    domain: VeDomains | string;
    /** Optional logger instance for debugging */
    logger?: DebugOptions;
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
    /** Emitted when the iframe has loaded/unloaded */
    iframeStateChanged: boolean;
} & CallsNotificationEvents;

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

/**
 * Strategy for executing compensation actions
 */
type CompensationStrategy = 'sequential' | 'parallel' | 'sequential-reversed';
/**
 * Callback to determine whether compensations should be executed based on the error
 * @param error The error that caused the operation to fail
 * @returns true to execute compensations, false to skip them
 */
type ShouldCompensateCallback = (error: Error) => boolean;
/**
 * CompensationContext provides a structured way to register cleanup/rollback actions
 * that should be executed when an operation fails, is aborted, or times out.
 *
 * This implements the Saga pattern's compensation concept, where each forward action
 * can have a corresponding compensation action to undo its effects.
 *
 * @see {@link https://microservices.io/patterns/data/saga.html | Saga Pattern}
 *
 * @example
 * ```typescript
 * await promiseManager.run('createUser', async (signal, compensations) => {
 *   const user = await api.createUser(data);
 *   compensations.register(() => api.deleteUser(user.id));
 *
 *   const role = await api.assignRole(user.id, 'admin');
 *   compensations.registerAsync(async () => {
 *     await api.removeRole(user.id, role.id);
 *   });
 *
 *   const profile = await api.createProfile(user.id, profileData);
 *   compensations.registerIf(
 *     profile.isPublic,
 *     () => api.deleteProfile(profile.id)
 *   );
 *
 *   return user;
 * }, {
 *   compensationStrategy: 'sequential-reversed'
 * });
 * ```
 */
declare class CompensationContext {
    private logger?;
    private actions;
    private strategy;
    /**
     * Creates a new CompensationContext
     * @param strategy The execution strategy for compensation actions (default: 'sequential-reversed')
     * @param logger Optional logger for debug and error messages
     */
    constructor(strategy?: CompensationStrategy, logger?: ILogger | undefined);
    /**
     * Registers a synchronous / asynchronous compensation action
     *
     * Compensation actions are executed in reverse order of registration by default.
     * Actions should be idempotent when possible, as they may be called multiple times.
     *
     * @param action The compensation action to register
     * @example
     * ```typescript
     * const userId = await createUser(data);
     * compensations.register(() => deleteUser(userId));
     * ```
     */
    register(action: () => void | Promise<void>): void;
    /**
     * Conditionally registers a compensation action based on a boolean condition
     *
     * The action is only registered if the condition is true.
     * The condition is evaluated immediately at registration time.
     *
     * @param condition A boolean indicating whether the action should be registered
     * @param action The compensation action to register if condition is true
     * @example
     * ```typescript
     * const resource = await allocateResource();
     * compensations.registerIf(
     *   resource.needsCleanup,
     *   () => releaseResource(resource.id)
     * );
     * ```
     */
    registerIf(condition: boolean, action: () => void | Promise<void>): void;
    /**
     * Lazily registers a compensation action with a condition evaluated at execution time
     *
     * The action is always registered, but the condition is evaluated during executeAll().
     * This is useful when the condition might change between registration and execution.
     * Supports both synchronous and asynchronous condition functions.
     * If the condition evaluation throws an error, it's logged and treated as false.
     *
     * @param condition A function that returns (or resolves to) true if the action should be executed
     * @param action The compensation action to execute if condition evaluates to true
     * @example
     * ```typescript
     * let sessionActive = true;
     * const session = await createSession();
     *
     * // Sync condition
     * compensations.registerIfLazy(
     *   () => sessionActive,
     *   () => closeSession(session.id)
     * );
     *
     * // Async condition
     * compensations.registerIfLazy(
     *   async () => await checkResourceExists(resource.id),
     *   async () => await deleteResource(resource.id)
     * );
     * ```
     */
    registerIfLazy(condition: () => boolean | Promise<boolean>, action: () => void | Promise<void>): void;
    /**
     * Gets the number of registered compensation actions
     * @returns The count of registered actions
     */
    getActionCount(): number;
    /**
     * Changes the execution strategy for compensation actions
     * @param strategy The new strategy to use
     */
    setStrategy(strategy: CompensationStrategy): void;
    /**
     * Gets the current execution strategy
     * @returns The current strategy
     */
    getStrategy(): CompensationStrategy;
    /**
     * Executes all registered compensation actions according to the configured strategy
     *
     * This method is called automatically by PromiseManager on operation failure.
     * Errors in individual compensation actions are logged but do not stop execution
     * of remaining actions (best-effort execution).
     *
     * @internal
     */
    executeAll(): Promise<void>;
    /**
     * Clears all registered compensation actions
     *
     * @internal
     */
    clear(): void;
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
 * timeouts, and clean abortion with built-in compensation/rollback capabilities via the Saga pattern.
 *
 * @see {@link CompensationContext} for details on the compensation mechanism
 */
declare class PromiseManager {
    private configs;
    static OperationRunningError: typeof OperationRunningError;
    static ConflictError: typeof ConflictError;
    static OperationAbortedError: typeof OperationAbortedError;
    static OperationTimeoutError: typeof OperationTimeoutError;
    private operations;
    logger: ILogger | undefined;
    /**
     * Creates a new PromiseManager instance
     * @param logger Optional logger for debug and error messages
     */
    constructor(logger?: ILogger, configs?: {
        memoryLeakCheckTimeoutMs: number;
    });
    /**
     * Runs an operation with the given name and options
     *
     * @param name Unique identifier for this operation
     * @param operation Function that performs the operation, receiving an AbortSignal and CompensationContext
     * @param options Configuration options for this operation
     * @returns Promise that resolves with the result of the operation
     * @throws {OperationRunningError} If operation is already running and waitIfRunning is false
     * @throws {ConflictError} If operation conflicts with operations in conflictsWith list
     * @throws {OperationAbortedError} If operation was aborted
     * @throws {OperationTimeoutError} If operation timed out
     *
     * @example
     * ```typescript
     * await pm.run('updateUser', async (signal, compensations) => {
     *   const user = await api.createUser(data);
     *   compensations.register(() => api.deleteUser(user.id));
     *   return user;
     * }, {
     *   compensationStrategy: 'sequential-reversed',
     *   shouldCompensate: (error) => !(error instanceof ValidationError)
     * });
     * ```
     */
    run<T>(name: string, 
    /**
     * The main operation function to execute.
     * It receives an AbortSignal to handle abortion requests
     * and a CompensationContext to register compensation actions.
     * @param signal AbortSignal to monitor for abortion requests
     * @param compensations CompensationContext to register compensation actions
     */
    operation: (signal: AbortSignal, compensations: CompensationContext) => Promise<T>, options?: {
        compensationStrategy?: CompensationStrategy;
        shouldCompensate?: ShouldCompensateCallback;
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

type ERROR_CODE_KEY = string;
type ERROR_CODE_VALUE = string;
type BaseErrorCodes = Record<ERROR_CODE_KEY, ERROR_CODE_VALUE>;
type BaseErrorCause<C extends ERROR_CODE_VALUE = ERROR_CODE_VALUE, N extends string = string, D extends string = string> = {
    name: N;
    description: D;
    code: C;
};
type BaseVideoEngagerErrorCodes<C extends BaseErrorCodes = BaseErrorCodes> = Record<C[keyof C], BaseErrorCause<C[keyof C], string, string>>;
interface ErrorCause<T extends ERROR_CODE_VALUE = ERROR_CODE_VALUE, N extends string = string, D extends string = string, ComponentName extends string = string> {
    code: T;
    name: N;
    description: D;
    component?: ComponentName;
    retryable?: boolean;
    originalError?: Error;
}
declare class VideoEngagerError<T extends BaseErrorCodes = BaseErrorCodes, U extends BaseVideoEngagerErrorCodes<T> = BaseVideoEngagerErrorCodes<T>, ComponentName extends string = string, SelectedCodeValue extends ERROR_CODE_VALUE = ERROR_CODE_VALUE> extends Error {
    static isVeError(error: unknown): error is VideoEngagerError;
    /**
     * A unique identifier for this error instance.
     * Can be used for tracking and correlation in logs.
     */
    idempotencyKey: string;
    cause: (ExtractErrorDetail<SelectedCodeValue, U, ComponentName>) & {
        code: SelectedCodeValue;
    };
    context: Record<string, any>;
    code: SelectedCodeValue;
    version: string;
    message: `VideoEngagerError: ${this['cause']['name']}`;
    constructor(name: string, message: string, cause: (ExtractErrorDetail<SelectedCodeValue, U, ComponentName>) & {
        code: SelectedCodeValue;
    }, context?: Record<string, any>, version?: string);
    toString(): string;
    toJSON(): Record<string, any>;
}
interface ErrorOptions {
    originalError?: Error | string;
    context?: Record<string, any>;
    retryable?: boolean;
    component?: string;
}
type ComponentNameStr = string;
type ExtractErrorDetail<Code extends ERROR_CODE_VALUE, U extends BaseVideoEngagerErrorCodes, ComponentName extends string> = Code extends keyof U ? U[Code] extends BaseErrorCause<Code, infer N, infer D> ? ErrorCause<Code, N, D, ComponentName> : ErrorCause<Code, string, string, ComponentName> : ErrorCause<Code, string, string, ComponentName>;
interface VEErrorByCode<T extends BaseErrorCodes = BaseErrorCodes, U extends BaseVideoEngagerErrorCodes<T> = BaseVideoEngagerErrorCodes<T>, ComponentName extends string = string, SelectedCodeValue extends ERROR_CODE_VALUE = ERROR_CODE_VALUE> extends VideoEngagerError<T, U, ComponentName, SelectedCodeValue> {
    code: SelectedCodeValue;
    cause: ExtractErrorDetail<SelectedCodeValue, U, ComponentName> & {
        code: SelectedCodeValue;
    };
}
type UnionVeErrorCodes<T extends BaseErrorCodes = BaseErrorCodes> = T[keyof T];
type AnyVEError<T extends BaseErrorCodes = BaseErrorCodes, U extends BaseVideoEngagerErrorCodes<T> = BaseVideoEngagerErrorCodes<T>, ComponentName extends string = string, VEErrorsCodes extends UnionVeErrorCodes<T> = UnionVeErrorCodes<T>> = ({
    [C in VEErrorsCodes]: VEErrorByCode<T, U, ComponentName, C>;
})[VEErrorsCodes];
interface VideoEngagerCustomErrorConstructor<T extends BaseErrorCodes, U extends BaseVideoEngagerErrorCodes<T>, ComponentName extends ComponentNameStr = ComponentNameStr> {
    code: T[keyof T];
    new <Code extends T[keyof T] = T[keyof T]>(code: Code, options?: ErrorOptions): AnyVEError<T, U, ComponentName, Code>;
    readonly codes: T;
    readonly errorsDetails: U;
    /**
    * used to chek if an error is an instance of VideoEngagerError (Generic)
    * This catch all type of errors instances created by videoEngager
    */
    isVeError(error: unknown): error is AnyVEError<T, U, ComponentName, T[keyof T]>;
    /**
    * used to chek if an error is an instance of VideoEngagerCustomError (Specific)
    */
    isOwnError<C extends T[keyof T]>(error: unknown): error is AnyVEError<T, U, ComponentName, C>;
    getErrorDetails<Code extends T[keyof T]>(code: Code): U[Code];
    isValidCode(code: string): code is T[keyof T];
}

declare const VEErrorCodes: Readonly<{
    AGENT_ALREADY_INITIALIZED: "agent|already-initialized";
    AGENT_NOT_INITIALIZED: "agent|not-initialized";
    AGENT_NOT_AUTHENTICATED: "agent|not-authenticated";
    AUTH_METHOD_NOT_SUPPORTED: "auth|method-not-supported";
    AUTH_GENESYS_ENVIRONMENT_REQUIRED: "auth|genesys-environment-required";
    AUTH_GENERIC_API_KEY_REQUIRED: "auth|generic-api-key-required";
    AUTH_GENERIC_EXTERNAL_ID_REQUIRED: "auth|generic-external-id-required";
    AUTH_GENERIC_AGENT_EMAIL_REQUIRED: "auth|generic-agent-email-required";
    AUTH_CUSTOM_FUNCTION_REQUIRED: "auth|custom-function-required";
    AUTH_CUSTOM_PARAMETERS_MISSING: "auth|custom-parameters-missing";
    AUTH_CUSTOM_PARAMETERS_INVALID_TYPE: "auth|custom-parameters-invalid-type";
    AUTH_CUSTOM_PARAMETERS_EMPTY: "auth|custom-parameters-empty";
    AUTH_CUSTOM_PARAMETERS_INVALID_VALUE_TYPE: "auth|custom-parameters-invalid-value-type";
    AUTH_TOKEN_REQUIRED: "auth|token-required";
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
    AGENT_NOT_IN_STANDALONE_MODE: "standalone|agent-not-in-standalone-mode";
    VISITOR_HAS_LEFT_SESSION: "standalone|visitor-has-left-session";
    SESSION_ACCEPTED_BY_ANOTHER_AGENT: "standalone|session-accepted-by-another-agent";
    SESSION_ACCEPTED_BY_SELF_ON_ANOTHER_DEVICE: "standalone|session-accepted-by-self-on-another-device";
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
    "auth|generic-agent-email-required": {
        name: string;
        description: string;
        code: "auth|generic-agent-email-required";
    };
    "auth|generic-external-id-required": {
        name: string;
        description: string;
        code: "auth|generic-external-id-required";
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
    "auth|token-required": {
        name: string;
        description: string;
        code: "auth|token-required";
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
    "standalone|agent-not-in-standalone-mode": {
        name: string;
        description: string;
        code: "standalone|agent-not-in-standalone-mode";
    };
    "standalone|visitor-has-left-session": {
        name: string;
        description: string;
        code: "standalone|visitor-has-left-session";
    };
    "standalone|session-accepted-by-another-agent": {
        name: string;
        description: string;
        code: "standalone|session-accepted-by-another-agent";
    };
    "standalone|session-accepted-by-self-on-another-device": {
        name: string;
        description: string;
        code: "standalone|session-accepted-by-self-on-another-device";
    };
}>;
declare const VideoEngagerAgentError: VideoEngagerCustomErrorConstructor<Readonly<{
    AGENT_ALREADY_INITIALIZED: "agent|already-initialized";
    AGENT_NOT_INITIALIZED: "agent|not-initialized";
    AGENT_NOT_AUTHENTICATED: "agent|not-authenticated";
    AUTH_METHOD_NOT_SUPPORTED: "auth|method-not-supported";
    AUTH_GENESYS_ENVIRONMENT_REQUIRED: "auth|genesys-environment-required";
    AUTH_GENERIC_API_KEY_REQUIRED: "auth|generic-api-key-required";
    AUTH_GENERIC_EXTERNAL_ID_REQUIRED: "auth|generic-external-id-required";
    AUTH_GENERIC_AGENT_EMAIL_REQUIRED: "auth|generic-agent-email-required";
    AUTH_CUSTOM_FUNCTION_REQUIRED: "auth|custom-function-required";
    AUTH_CUSTOM_PARAMETERS_MISSING: "auth|custom-parameters-missing";
    AUTH_CUSTOM_PARAMETERS_INVALID_TYPE: "auth|custom-parameters-invalid-type";
    AUTH_CUSTOM_PARAMETERS_EMPTY: "auth|custom-parameters-empty";
    AUTH_CUSTOM_PARAMETERS_INVALID_VALUE_TYPE: "auth|custom-parameters-invalid-value-type";
    AUTH_TOKEN_REQUIRED: "auth|token-required";
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
    AGENT_NOT_IN_STANDALONE_MODE: "standalone|agent-not-in-standalone-mode";
    VISITOR_HAS_LEFT_SESSION: "standalone|visitor-has-left-session";
    SESSION_ACCEPTED_BY_ANOTHER_AGENT: "standalone|session-accepted-by-another-agent";
    SESSION_ACCEPTED_BY_SELF_ON_ANOTHER_DEVICE: "standalone|session-accepted-by-self-on-another-device";
}>, Readonly<{
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
    "auth|generic-agent-email-required": {
        name: string;
        description: string;
        code: "auth|generic-agent-email-required";
    };
    "auth|generic-external-id-required": {
        name: string;
        description: string;
        code: "auth|generic-external-id-required";
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
    "auth|token-required": {
        name: string;
        description: string;
        code: "auth|token-required";
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
    "standalone|agent-not-in-standalone-mode": {
        name: string;
        description: string;
        code: "standalone|agent-not-in-standalone-mode";
    };
    "standalone|visitor-has-left-session": {
        name: string;
        description: string;
        code: "standalone|visitor-has-left-session";
    };
    "standalone|session-accepted-by-another-agent": {
        name: string;
        description: string;
        code: "standalone|session-accepted-by-another-agent";
    };
    "standalone|session-accepted-by-self-on-another-device": {
        name: string;
        description: string;
        code: "standalone|session-accepted-by-self-on-another-device";
    };
}>, "VideoEngagerAgent">;
type VideoEngagerAgentError = InstanceType<typeof VideoEngagerAgentError>;

type AgentAuthConfigGeneric = Pick<VeAgentOptions<'generic'>, 'agentEmail' | 'apiKey' | 'domain' | 'authMethod' | 'organizationId'> & StandaloneConfiguration$1;
type AgentAuthConfigToken = Pick<VeAgentOptions<'token'>, 'authMethod' | 'token' | 'domain'>;
declare const SupportedAuthMethods: Readonly<{
    readonly token: "token";
    readonly generic: "generic";
}>;
type SupportedAuthMethods = keyof typeof SupportedAuthMethods;
type AgentAuthConfigs<T extends SupportedAuthMethods> = T extends 'generic' ? AgentAuthConfigGeneric : AgentAuthConfigToken;
declare class AgentAuthentication<S extends SupportedAuthMethods, T extends AgentAuthConfigs<S> = AgentAuthConfigs<S>> {
    protected configs: T;
    protected logger: ContextTreeLogger;
    protected promiseManager: PromiseManager;
    protected initialized: boolean;
    constructor(opts: {
        configs: T;
        logger: ContextTreeLogger;
    });
    waitForInitialization(): Promise<void>;
    private initialize;
    private authenticate;
    getDisplayName(): string;
    private _brokerageData?;
    private _signallingUrl?;
    private _token?;
    private _veDomain?;
    get brokerageData(): AgentBrokerageSettings;
    get signallingUrl(): string;
    get token(): string;
    get veDomain(): URL;
    destroy(): void;
}

type AgentPushNotificationsOpts = {
    agentAuthenticate: AgentAuthentication<any, any>;
    logger: ContextTreeLogger;
    eventEmitter?: EventEmitter<VeEventMap>;
    callbacks: {
        call: (opts: {
            customerId: string;
        }) => Promise<void>;
        getCallState: () => CallState;
    };
};
declare class CallNotificationManager {
    eventEmitter: EventEmitter<VeEventMap>;
    private promiseManager;
    private logger;
    private callbacks;
    private agentAuthenticate;
    constructor(opts: AgentPushNotificationsOpts);
    get isOnQueue(): boolean;
    get isOnline(): boolean;
    protected pushClientManager: PushClientManager;
    protected scriptLoader: ExternalScriptLoader<any>;
    initialize(): Promise<void>;
    protected initializeCallsNotifications(): Promise<void>;
    switchQueue(): Promise<void>;
    /**
    * Transforms Promise Manager errors to VideoEngager Agent errors
    */
    protected handlerErrors: (error: unknown) => VideoEngagerAgentError;
    acceptCall(visitorId: string): Promise<void>;
    rejectCall(visitorId: string): Promise<void>;
    protected registerPushNotificationEvents(): Promise<void>;
    removeCall(callId: string, visitorId: string): void;
    private calls;
    get currentReceivedCalls(): CallInfo[];
    destroyInstance(): Promise<void>;
}

declare const VERSION = "4.0.1";

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
    protected logger: ContextTreeLogger;
    protected eventEmitter: EventEmitter<VeEventMap>;
    protected authParameters?: Record<string, any>;
    protected promiseManager: PromiseManager;
    protected PromiseManager: typeof PromiseManager;
    static readonly VERSION = "4.0.1";
    private configs;
    private static _instance;
    protected _isInitialized: boolean;
    private cleanups;
    protected get defaultCallState(): CallState;
    protected callState: CallState;
    get currentCallState(): CallState;
    constructor();
    /**
     * Gets the current call state
     * @returns The current call state
     *
     * @example
     * ```typescript
     * const callState = agent.getCurrentCallState();
     * console.log(`Current call status: ${callState.status
     */
    getCurrentCallState(): CallState;
    /**
     * Static method to get the current call state
     * Always delegates to the current singleton instance
     * * @returns The current call state
     *
     * @example
     * ```typescript
     * const callState = VideoEngagerAgent.getCurrentCallState();
     * console.log(`Current call status: ${callState.status}`);
     * ```
     * */
    static getCurrentCallState(): CallState;
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
    /**
     * Type guard to check if the agent is configured in standalone mode
     * Standalone mode is only available with 'generic' or 'token' authentication methods
     * @beta
     *
     * @param configs - The configuration object to check
     * @returns True if standalone mode is enabled, with type narrowing
     * @throws {VideoEngagerAgentError} When configs is null or undefined
     *
     * @example
     * ```typescript
     * if (agent.isStandaloneMode(agent.configs)) {
     *   // TypeScript knows this is standalone mode with generic/token auth
     *   await agent.acceptCall(visitorId);
     * }
     * ```
     */
    isStandaloneMode(configs: VeAgentOptions<T>): configs is (VeAgentOptions<'generic' | 'token'> & {
        standaloneMode: true;
    });
    /**
     * Initializes the VideoEngager Agent with the provided configuration
     * Only for advanced use cases, prefer using the static init() method
     * @template T - The authentication provider type
     * @param configs - Configuration options for the agent
     * @throws {VideoEngagerAgentError} When agent is already initialized or configuration is invalid
     * * @returns Promise that resolves when initialization is complete
     */
    initialize(configs: VeAgentOptions<T>): Promise<void>;
    protected registerSmartVideoEvents(): void;
    protected updateCallState(payload: EventPayload<EVENTS_NAMES>, emitUpdate?: boolean): void;
    protected handleStatusEvent<T extends EVENTS_NAMES>(payload: EventPayload<T>): Promise<void>;
    protected _isIframeOpened: boolean;
    protected setIsIframeOpened(value: HTMLIFrameElement | null): void;
    /**
     * Checks if the VideoEngager iframe is currently open
     *
     * @returns True if the iframe is open and has an active content window
     *
     * @example
     * ```typescript
     * if (agent.isIframeOpened()) {
     *   console.log('Widget is currently displayed');
     * }
     *
     * // Listen for iframe state changes
     * agent.on('iframeStateChanged', (isOpen) => {
     *   console.log(`Iframe is now ${isOpen ? 'open' : 'closed'}`);
     * });
     * ```
     */
    isIframeOpened(): boolean;
    /**
     * Sets custom UI handlers for iframe management
     * Allows you to control how the VideoEngager widget is displayed and managed
     *
     * @param uiHandler - Custom UI handler implementation with openIframe, closeIframe, and getIframe methods
     * @throws {VideoEngagerAgentError} When required methods are missing from the handler
     *
     * @example
     * ```typescript
     * const customHandlers: VeAgentUiHandlers = {
     *   openIframe: async (src, config) => {
     *     const iframe = document.createElement('iframe');
     *     iframe.src = src;
     *     document.body.appendChild(iframe);
     *     return iframe;
     *   },
     *   closeIframe: async (config) => {
     *     const iframe = document.querySelector('iframe');
     *     iframe?.remove();
     *   },
     *   getIframe: async (config) => {
     *     return document.querySelector('iframe');
     *   }
     * };
     *
     * agent.setUiHandler(customHandlers);
     * ```
     */
    setUiHandler(uiHandler?: VeAgentUiHandlers): void;
    private onCloseHandler;
    protected get handlersUiFromConfigs(): VeAgentUiHandlers;
    protected uiHandlers: {
        openIframe: (url: string, options: VeAgentOptions<AuthProviderTypes>) => void | Promise<void>;
        closeIframe: (configs: VeAgentOptions<AuthProviderTypes>) => void | Promise<void>;
        getIframe: (configs: VeAgentOptions<AuthProviderTypes>) => HTMLIFrameElement | Promise<HTMLIFrameElement | null> | null;
    };
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
    /** Standalone Specific Methods */
    protected _callsNotificationsManager?: CallNotificationManager;
    protected get callsNotificationsManager(): CallNotificationManager;
    protected _agentDetails?: AgentAuthentication<'generic' | 'token'>;
    protected get agentDetails(): AgentAuthentication<'generic' | 'token'>;
    protected initializeStandaloneModules(): Promise<{
        token: string;
    } | undefined>;
    /**
     * Gets the list of currently received incoming calls
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @returns Array of received call notifications
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @remarks
     * Listen to 'incomingCall' event for new calls and 'callRemoved' event for removed calls
     *
     * @example
     * ```typescript
     * // Get current received calls
     * const calls = agent.getReceivedCalls();
     * console.log(`${calls.length} calls waiting`);
     *
     * // Listen for changes
     * on('incomingCall', (call) => {
     *   const allCalls = getReceivedCalls();
     *   console.log('Updated call list:', allCalls);
     * });
     *
     * on('callRemoved', (visitorId) => {
     *   console.log('Call removed:', visitorId);
     * });
     * ```
     */
    getReceivedCalls(): CallInfo[];
    /**
     * Toggles the agent's queue status (on/off)
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @returns Promise that resolves when the queue status is toggled
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @remarks
     * When on queue, the agent will start receiving incoming call notifications.
     * Listen to 'inCallsQueue' event to detect queue status changes.
     *
     * @example
     * ```typescript
     * // Toggle queue status
     * await agent.switchQueue();
     *
     * // Check new status
     * const isOnQueue = agent.isOnQueue();
     * console.log(`Agent is ${isOnQueue ? 'on' : 'off'} queue`);
     *
     * // Listen for queue status changes
     * on('inCallsQueue', (isOnQueue) => {
     *   console.log(`Queue status changed: ${isOnQueue ? 'ON' : 'OFF'}`);
     * });
     * ```
     */
    switchQueue(): Promise<void>;
    /**
     * Checks if the agent is currently on the call queue
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @returns True if agent is on queue and receiving calls, false otherwise
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @remarks
     * Listen to 'inCallsQueue' event to detect when queue status changes
     *
     * @example
     * ```typescript
     * // Check queue status
     * if (agent.isOnQueue()) {
     *   console.log('Agent is receiving calls');
     * } else {
     *   console.log('Agent is not on queue');
     * }
     *
     * // Listen for status changes
     * on('inCallsQueue', (isOnQueue) => {
     *   console.log(`Agent is now ${isOnQueue ? 'ON' : 'OFF'} queue`);
     * });
     * ```
     */
    isOnQueue(): boolean;
    isOnline(): boolean;
    /**
     * Accepts an incoming call notification
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @param visitorId - The visitor ID from the incoming call notification event
     * @returns Promise that resolves when the call is accepted and widget is opened
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     * @throws {VideoEngagerAgentError} SESSION_ALREADY_ACTIVE - When another call is active
     *
     * @example
     * ```typescript
     * // Initialize with standalone mode
     * await init({
     *   authMethod: 'generic',
     *   standaloneMode: true,
     *   apiKey: 'your-key',
     *   domain: 'your-domain.com',
     *   agentEmail: 'agent@example.com'
     * });
     *
     * // Listen for incoming calls
     * on('incomingCall', async (notification) => {
     *   console.log(`Incoming call from ${notification.callerName}`);
     *   await getInstance().acceptCall(notification.visitorId);
     * });
     * ```
     */
    acceptCall(visitorId: string): Promise<void>;
    /**
     * Rejects an incoming call notification
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @param visitorId - The visitor ID from the incoming call notification event
     * @returns Promise that resolves when the call is rejected
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @example
     * ```typescript
     * // Listen for incoming calls and reject them
     * on('incomingCall', async (notification) => {
     *   if (shouldReject(notification)) {
     *     await getInstance().rejectCall(notification.visitorId);
     *   }
     * });
     * ```
     */
    rejectCall(visitorId: string): Promise<void>;
    /**
     * Gets the display name of the authenticated agent
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @returns The agent's display name (typically first name + last name)
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @example
     * ```typescript
     * const agent = getInstance();
     * const displayName = agent.getDisplayName();
     * console.log(`Logged in as: ${displayName}`);
     * ```
     */
    getDisplayName(): string;
    /**
     * Gets the authenticated agent's settings and brokerage data
     * @beta
     *
     * ⚠️ **Standalone Mode Only** - This method requires `standaloneMode: true`
     * with `authMethod: 'generic'` or `authMethod: 'token'`
     *
     * @returns The agent's brokerage data and settings
     * @throws {VideoEngagerAgentError} AGENT_NOT_IN_STANDALONE_MODE - When called without standalone mode
     *
     * @example
     * ```typescript
     * const agent = getInstance();
     * const settings = agent.agentSettings();
     * console.log('Agent settings:', settings);
     * ```
     */
    agentSettings(): AgentBrokerageSettings;
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
        <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void] | [type: "iframeStateChanged", payload: boolean] | [type: "incomingCall", payload: CallInfo] | [type: "acceptedElsewhere", payload: {
            callId: string;
            visitorId: string;
            acceptedByUser?: string;
            acceptedByMyOtherDevice?: string;
        }] | [type: "callRemoved", payload: string] | [type: "partyLeft", payload: string] | [type: "inCallsQueue", payload: boolean] | [type: "isOnline", payload: boolean]) => void | Promise<void>, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
            async?: boolean;
        } | undefined): () => void;
        <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void] | [type: "iframeStateChanged", payload: boolean] | [type: "incomingCall", payload: CallInfo] | [type: "acceptedElsewhere", payload: {
            callId: string;
            visitorId: string;
            acceptedByUser?: string;
            acceptedByMyOtherDevice?: string;
        }] | [type: "callRemoved", payload: string] | [type: "partyLeft", payload: string] | [type: "inCallsQueue", payload: boolean] | [type: "isOnline", payload: boolean]) => void | Promise<void>, options?: {
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
        <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
        <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
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
    cleanup(): Promise<void>;
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
     * Static method to check if iframe is open
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns True if iframe is currently open
     * @throws {VideoEngagerAgentError} When agent is not initialized
     *
     * @example
     * ```typescript
     * if (VideoEngagerAgent.isIframeOpened()) {
     *   console.log('Widget is visible');
     * }
     * ```
     */
    static isIframeOpened(): boolean;
    /**
     * Static method to accept an incoming call (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @param args - Arguments to pass to acceptCall
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * await VideoEngagerAgent.acceptCall(visitorId);
     * ```
     */
    static acceptCall(...args: Parameters<VideoEngagerAgent['acceptCall']>): ReturnType<VideoEngagerAgent['acceptCall']>;
    /**
     * Static method to reject an incoming call (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @param args - Arguments to pass to rejectCall
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * await VideoEngagerAgent.rejectCall(visitorId);
     * ```
     */
    static rejectCall(...args: Parameters<VideoEngagerAgent['rejectCall']>): ReturnType<VideoEngagerAgent['rejectCall']>;
    /**
     * Static method to get agent display name (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns The agent's display name
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * const displayName = VideoEngagerAgent.getDisplayName();
     * ```
     */
    static getDisplayName(): ReturnType<VideoEngagerAgent['getDisplayName']>;
    /**
     * Static method to get agent settings (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns The agent's settings and brokerage data
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * const settings = VideoEngagerAgent.agentSettings();
     * ```
     */
    static agentSettings(): ReturnType<VideoEngagerAgent['agentSettings']>;
    /**
     * Static method to set custom UI handlers
     * Always delegates to the current singleton instance
     *
     * @param args - Arguments to pass to setUiHandler
     * @throws {VideoEngagerAgentError} When agent is not initialized
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * VideoEngagerAgent.setUiHandler(customHandlers);
     * ```
     */
    static setUiHandler(...args: Parameters<VideoEngagerAgent['setUiHandler']>): ReturnType<VideoEngagerAgent['setUiHandler']>;
    /**
     * Static method to get received calls (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns Array of received call notifications
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * const calls = VideoEngagerAgent.getReceivedCalls();
     * ```
     */
    static getReceivedCalls(): ReturnType<VideoEngagerAgent['getReceivedCalls']>;
    /**
     * Static method to toggle queue status (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns Promise that resolves when queue status is toggled
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * await VideoEngagerAgent.switchQueue();
     * ```
     */
    static switchQueue(): ReturnType<VideoEngagerAgent['switchQueue']>;
    /**
     * Static method to check queue status (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns True if agent is on queue
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * const isOnQueue = VideoEngagerAgent.isOnQueue();
     * ```
     */
    static isOnQueue(): ReturnType<VideoEngagerAgent['isOnQueue']>;
    /**
     * Static method to check online status (Standalone Mode Only)
     * Always delegates to the current singleton instance
     * @beta
     *
     * @returns True if agent is online
     * @throws {VideoEngagerAgentError} When agent is not initialized or not in standalone mode
     *
     * @example
     * ```typescript
     * import { VideoEngagerAgent } from '@videoengager/agent';
     *
     * const isOnline = VideoEngagerAgent.isOnline();
     * ```
     */
    static isOnline(): ReturnType<VideoEngagerAgent['isOnline']>;
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
    <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void] | [type: "iframeStateChanged", payload: boolean] | [type: "incomingCall", payload: CallInfo] | [type: "acceptedElsewhere", payload: {
        callId: string;
        visitorId: string;
        acceptedByUser?: string;
        acceptedByMyOtherDevice?: string;
    }] | [type: "callRemoved", payload: string] | [type: "partyLeft", payload: string] | [type: "inCallsQueue", payload: boolean] | [type: "isOnline", payload: boolean]) => void | Promise<void>, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never, options?: {
        async?: boolean;
    } | undefined): () => void;
    <K extends "*">(event: K, handler: (...args: [type: "initialized", payload: VeAgentOptions<AuthProviderTypes>] | [type: "sessionStarted", payload: CallState] | [type: "sessionEnded", payload: CallState] | [type: "sessionFailed", payload: EventPayload<EVENTS_NAMES>] | [type: "callStateUpdated", payload: CallState] | [type: "cleanup", payload: void] | [type: "iframeStateChanged", payload: boolean] | [type: "incomingCall", payload: CallInfo] | [type: "acceptedElsewhere", payload: {
        callId: string;
        visitorId: string;
        acceptedByUser?: string;
        acceptedByMyOtherDevice?: string;
    }] | [type: "callRemoved", payload: string] | [type: "partyLeft", payload: string] | [type: "inCallsQueue", payload: boolean] | [type: "isOnline", payload: boolean]) => void | Promise<void>, options?: {
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
    <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
    <K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents>(event: K, handler: K extends "initialized" | "sessionStarted" | "sessionEnded" | "sessionFailed" | "callStateUpdated" | "cleanup" | "iframeStateChanged" | keyof CallsNotificationEvents ? (payload: VeEventMap[K]) => void | Promise<void> : never): void;
};
/**
 * Check if the VideoEngager iframe is currently open
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * @example
 * ```typescript
 * import { isIframeOpened } from '@videoengager/agent';
 *
 * if (isIframeOpened()) {
 *   console.log('Widget is currently visible');
 * }
 * ```
 */
declare const isIframeOpened: typeof VideoEngagerAgent.isIframeOpened;
/**
 * Accept an incoming call notification (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { acceptCall, on } from '@videoengager/agent';
 *
 * on('incomingCall', async (notification) => {
 *   await acceptCall(notification.visitorId);
 * });
 * ```
 */
declare const acceptCall: typeof VideoEngagerAgent.acceptCall;
/**
 * Reject an incoming call notification (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { rejectCall, on } from '@videoengager/agent';
 *
 * on('incomingCall', async (notification) => {
 *   await rejectCall(notification.visitorId);
 * });
 * ```
 */
declare const rejectCall: typeof VideoEngagerAgent.rejectCall;
/**
 * Get the authenticated agent's display name (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { getDisplayName } from '@videoengager/agent';
 *
 * const name = getDisplayName();
 * console.log(`Logged in as: ${name}`);
 * ```
 */
declare const getDisplayName: typeof VideoEngagerAgent.getDisplayName;
/**
 * Get the authenticated agent's settings and brokerage data (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { agentSettings } from '@videoengager/agent';
 *
 * const settings = agentSettings();
 * console.log('Agent configuration:', settings);
 * ```
 */
declare const agentSettings: typeof VideoEngagerAgent.agentSettings;
/**
 * Set custom UI handlers for iframe management
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * @example
 * ```typescript
 * import { setUiHandler } from '@videoengager/agent';
 *
 * setUiHandler({
 *   openIframe: async (src, config) => {
 *     // Custom implementation
 *   },
 *   closeIframe: async (config) => {
 *     // Custom implementation
 *   },
 *   getIframe: async (config) => {
 *     // Custom implementation
 *   }
 * });
 * ```
 */
declare const setUiHandler: typeof VideoEngagerAgent.setUiHandler;
/**
 * Get the current call state from the default agent instance
 * This is a convenience export that accesses the currentCallState property
 *
 * @example
 * ```typescript
 * import { getCurrentCallState } from '@videoengager/agent';
 * const callState = getCurrentCallState();
 * console.log(`Current call status: ${callState.status}`);
 * ```
 */
declare const getCurrentCallState: typeof VideoEngagerAgent.getCurrentCallState;
/**
 * Get the list of received incoming calls (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { getReceivedCalls, on } from '@videoengager/agent';
 *
 * const calls = getReceivedCalls();
 * console.log(`${calls.length} calls waiting`);
 *
 * on('incomingCall', () => {
 *   const updated = getReceivedCalls();
 *   console.log('Call list updated');
 * });
 * ```
 */
declare const getReceivedCalls: typeof VideoEngagerAgent.getReceivedCalls;
/**
 * Toggle agent's queue status (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { switchQueue, isOnQueue, on } from '@videoengager/agent';
 *
 * // Toggle queue
 * await switchQueue();
 * console.log(`Queue is now ${isOnQueue() ? 'ON' : 'OFF'}`);
 *
 * // Listen for changes
 * on('inCallsQueue', (status) => {
 *   console.log(`Queue status: ${status ? 'ON' : 'OFF'}`);
 * });
 * ```
 */
declare const switchQueue: typeof VideoEngagerAgent.switchQueue;
/**
 * Check if agent is currently on the call queue (Standalone Mode Only)
 * This method is safe to use even after destroy() - it always delegates to the current instance
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { isOnQueue } from '@videoengager/agent';
 *
 * if (isOnQueue()) {
 *   console.log('Agent is receiving calls');
 * } else {
 *   console.log('Agent is not on queue');
 * }
 * ```
 */
declare const isOnQueue: typeof VideoEngagerAgent.isOnQueue;
/**
 * Check if agent is currently online (Standalone Mode Only)
 *
 * This method is safe to use even after destroy() - it always delegates to the current instance
 *
 * Some Methods may depend on online status to function properly - such as switching queue status.
 * @beta
 *
 * ⚠️ **Standalone Mode Only** - Requires `standaloneMode: true` with `authMethod: 'generic' | 'token'`
 *
 * @example
 * ```typescript
 * import { isOnline, switchQueue } from '@videoengager/agent';
 *
 * if (isOnline()) {
 *   console.log('Agent is connected to notification server');
 *   // Safe to perform queue operations
 *   await switchQueue();
 * } else {
 *   console.log('Agent is offline - waiting for connection');
 * }
 * ```
 */
declare const isOnline: typeof VideoEngagerAgent.isOnline;

export { VEErrorCodes, VEErrorDetails, VERSION, VideoEngagerAgent, VideoEngagerAgentError, acceptCall, agentSettings, call, VideoEngagerAgent as default, destroy, endCall, getCurrentCallState, getDisplayName, getInstance, getReceivedCalls, init, isIframeOpened, isInitialized, isOnQueue, isOnline, off, on, rejectCall, setUiHandler, switchQueue };
