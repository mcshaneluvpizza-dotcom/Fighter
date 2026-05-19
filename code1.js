gdjs.LobbyselectCode = {};
gdjs.LobbyselectCode.localVariables = [];
gdjs.LobbyselectCode.idToCallbackMap = new Map();
gdjs.LobbyselectCode.GDNewTextObjects1= [];
gdjs.LobbyselectCode.GDNewTextObjects2= [];


gdjs.LobbyselectCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


};

gdjs.LobbyselectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyselectCode.GDNewTextObjects1.length = 0;
gdjs.LobbyselectCode.GDNewTextObjects2.length = 0;

gdjs.LobbyselectCode.eventsList0(runtimeScene);
gdjs.LobbyselectCode.GDNewTextObjects1.length = 0;
gdjs.LobbyselectCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['LobbyselectCode'] = gdjs.LobbyselectCode;
