var options = {
    key: '4e299a15-dfb4-49bd-9907-20926bc10962',
    defaultDepartmentId: 'b9aafdb8-b191-47e6-9257-c5b06d034bee',
    culture: "he-IL",
    position: "right",
    introductionMessageText: 'היי,\r\nכיצד נוכל לסייע לך?',
    chatNowPromptText: 'לחץ כאן לשיחה עם נציג אנושי',
    enableParticipantMessage: false,
    initialCardId: 227,
    bottom:"95px",
    launcherIcon: "https://s3.eu-central-1.amazonaws.com/glassix-private-prod/cibus-chat-Icon.png",
    launcherColor: "#D40E7E"
};
window.widgetClient = new GlassixWidgetClient(options);
widgetClient.attach();