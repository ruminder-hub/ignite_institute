export type Config = {
  
    baseUrl: string,
    hostName: string,
    mymobileUrl: string,
    helpUrl: string,
  
    endStepHasTimeout: boolean,
    endStepHasBadge: boolean,
  
    confirmAnswers: boolean,
  
    useFullKeyboardForManualInput: boolean,
  
    allow_manual_retake: boolean,
    filter_unscheduled_interviews: boolean,
    show_sensor_interviews_first: boolean,
    show_unscheduled_interviews_first: boolean,
    unscheduled_interview_warning: boolean,
  
    language: string,
    forceLanguage: boolean,
    multiLanguage: boolean,
    allowLanguageSelection: boolean,
  
  
    user_timeout_in_minutes: number,
    user_timeout_countdown_minutes: number,
  
    lungmonitor_retake_limit: number,
  
    readings_timeout_seconds: number,
  
    rememberMe: boolean,
  
    pin_only_registration: boolean,
    enable_contact_carer: boolean, 
   
    enable_terms_of_use: boolean, 
    enable_privacy_policy: boolean, 
    enable_eu_info: boolean  
    
    allow_screenshots: boolean
   
    speakInterviews: boolean,
    freeTextCharacterLimit: number,
  
    debug: boolean,
  
    nameOrder: string,
    
  
    kiosk: {
      allowAddPatient: boolean,
      hcnUseNumericKeyboard : boolean,
      hcnLength : number,
      hcnExpression: string,
      birthDateRequired: boolean,
      hcnRequired: boolean,
      chatIdEnabled: boolean,
      chatPinMinLength: number,
      twoFactorAuthEnabled: boolean
    }
  
  
  
    embedContent: boolean,
  
    toastDurationInSeconds: number,
  
    useExternalVideoConferencing:boolean,
    videoConferencingProvider: "tokbox" | "vidyo"
    vidyoHost: string,
    videoKey: string,
    enableVideoConferencing: boolean,
    embedVideoConferencing: boolean,
    enableVideoConferencingPerPatient: boolean,
    videoStartUrl: string,
    videoJoinUrl: string,
    loadChatHistoryLimit: number,
    enableChatInVC: boolean,
  
  
    showCEMark: boolean,
  
    healthKitEnabled: boolean,
  
    Nonin_3230_skip_count: number,
  
    allowNegativeValues: Array<string>,
  
    omitDesignations: Array<string>,
  
    notificationLookAhead: number,
  
    vitals_graph_measurement_tooltip_timeout_sec: number,
  
  
    sensorReadingCap: number,
  
    hcn_login:boolean,
    use_id_scanner: boolean,
    id_scanner_candidateExpression:string,
    id_scanner_verifyExpression: string,
    id_scanner_verifyChecksum: string,
    id_scanner_options_cameraDirection: string,
    id_scanner_options_cameraFlash: string,
  
    enableEducationContent: boolean,
    enableDocuments:false,
  
    enable_latest_readings: boolean,
    enable_myassist: boolean,
    myassist_package_name: string,
   
    enable_work_offline: boolean,
  
    patient_search: {
      per_page: number
    },
  
    instantchat:{
      enable: boolean,
      key: string,
      provider: string,
      instantChatConnectionLimit: number,
      instantChatHistoryLimit: number,
      chatJoinUrl: string
    },
  
    secure_goals: {
      enabled: boolean,
      per_page: number
    },
  
    secure_leaderboards: {
      cut_off_date: number,
      per_page: number
    },
  
    secure_awards: {
      cut_off_date: number,
      per_page: number
    },
  
  
    secure_documents:{
      enabled: boolean,
      per_page: number,
      refresh_in_minutes: number,
      allowedTypes: string[],
      max_size_bytes: number,
      max_length_description: number
    },
  
    syncRefreshInMinutes: number,
  
    secure_messaging: {
      enabled: boolean,
      per_page: number,
      text_input_for_message_subject: boolean,
      refresh_in_minutes: number
    }, 
  
    branding: {
      loginHeader: boolean,
      loginLogo: boolean,
      topNavBackgroundColor: string,
      topNavTextColor: string,
      logoUrl: string
    
    },
  
    publicKey: string,
  
      
    anyline_ocr: {
      enabled: Boolean,
      key: string,
      scan?: {
        validationRegex: string,
        charWhitelist: string,
        scanMode: string,
        minConfidence: number,
        removeSmallContours: boolean,
        removeWhitespaces: boolean,
        minSharpness: number,
        minCharacterHeight: number,
        maxCharacterHeight: number,
        languages: string[]
      },
    
      display: {
        captureResolution: string,
        cutout: {
          style: string,
          maxWidthPercent: string,
          maxHeightPercent: string,
          alignment: string,
          width?: number,
          ratioFromSize?: {
            width: number,
            height: number
          },
          strokeWidth: number,
          cornerRadius: number,
          strokeColor: string,
          outerColor: string,
          outerAlpha: number
        },
        
        flash: {
          mode: string,
          alignment: string
        },
        beepOnResult: boolean,
        vibrateOnResult: boolean,
        cancelOnResult: boolean,
        visualFeedback?: {
          style: string,
          strokeColor: number,
          strokeWidth: number
        }
      }
    },
    
    
  };