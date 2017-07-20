import React, { Component } from "react";
import AppChat from "./Chat";
import ChatDetails from "./ChatDetails";
import { StackNavigator } from "react-navigation";
export default (DrawNav = StackNavigator({
    Chat: { screen: AppChat },
    ChatDetails: { screen: ChatDetails },
}));
