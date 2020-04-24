import React, { Component } from 'react';
import Header from '../comps/Header';
import CustomButton from '../comps/CustomButton';

export default {
    title: 'Page with custom buttons',
    Component:null
};

export const PageWithCustomButtons = () => <div>
<Header></Header>
<Header></Header>
<div className = "buttondiv">
    <CustomButton color = "gray" text = "Cancel"></CustomButton>
    <CustomButton color = "skyblue" text = "Okay" ></CustomButton>
    <CustomButton color = "brown" text = "Submit"></CustomButton>
    <CustomButton color = "black" text = "Menu"></CustomButton>
</div>

</div>