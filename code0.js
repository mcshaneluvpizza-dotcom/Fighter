gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDhostplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDhostplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDpeer1Objects1= [];
gdjs.Untitled_32sceneCode.GDpeer1Objects2= [];
gdjs.Untitled_32sceneCode.GDplayer1bullObjects1= [];
gdjs.Untitled_32sceneCode.GDplayer1bullObjects2= [];
gdjs.Untitled_32sceneCode.GDp2bullObjects1= [];
gdjs.Untitled_32sceneCode.GDp2bullObjects2= [];
gdjs.Untitled_32sceneCode.GDhpbarObjects1= [];
gdjs.Untitled_32sceneCode.GDhpbarObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayer1bullObjects1Objects = Hashtable.newFrom({"player1bull": gdjs.Untitled_32sceneCode.GDplayer1bullObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDp2bullObjects1Objects = Hashtable.newFrom({"p2bull": gdjs.Untitled_32sceneCode.GDp2bullObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDp2bullObjects1Objects = Hashtable.newFrom({"p2bull": gdjs.Untitled_32sceneCode.GDp2bullObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhostplayerObjects1Objects = Hashtable.newFrom({"hostplayer": gdjs.Untitled_32sceneCode.GDhostplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayer1bullObjects1Objects = Hashtable.newFrom({"player1bull": gdjs.Untitled_32sceneCode.GDplayer1bullObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpeer1Objects1Objects = Hashtable.newFrom({"peer1": gdjs.Untitled_32sceneCode.GDpeer1Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hostplayer"), gdjs.Untitled_32sceneCode.GDhostplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hostplayer"), gdjs.Untitled_32sceneCode.GDhostplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hostplayer"), gdjs.Untitled_32sceneCode.GDhostplayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peer1"), gdjs.Untitled_32sceneCode.GDpeer1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpeer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peer1"), gdjs.Untitled_32sceneCode.GDpeer1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpeer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peer1"), gdjs.Untitled_32sceneCode.GDpeer1Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpeer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isCurrentPlayerHost();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hostplayer"), gdjs.Untitled_32sceneCode.GDhostplayerObjects1);
gdjs.Untitled_32sceneCode.GDplayer1bullObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDhostplayerObjects1[i].getPointY("")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayer1bullObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), 500, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isCurrentPlayerHost());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("peer1"), gdjs.Untitled_32sceneCode.GDpeer1Objects1);
gdjs.Untitled_32sceneCode.GDp2bullObjects1.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpeer1Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDpeer1Objects1[i].getPointY("")), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDp2bullObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), 500, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "LOL", 0.2, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("hpbar"), gdjs.Untitled_32sceneCode.GDhpbarObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDhpbarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDhpbarObjects1[i].getBehavior("Text").setText("player 1 has " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()) + " and the host has " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("hostplayer"), gdjs.Untitled_32sceneCode.GDhostplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("p2bull"), gdjs.Untitled_32sceneCode.GDp2bullObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDp2bullObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDhostplayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("peer1"), gdjs.Untitled_32sceneCode.GDpeer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("player1bull"), gdjs.Untitled_32sceneCode.GDplayer1bullObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayer1bullObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDpeer1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDhostplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpeer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDpeer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayer1bullObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayer1bullObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDp2bullObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDp2bullObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDhpbarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDhpbarObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDhostplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDhostplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpeer1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDpeer1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplayer1bullObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayer1bullObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDp2bullObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDp2bullObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDhpbarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDhpbarObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
