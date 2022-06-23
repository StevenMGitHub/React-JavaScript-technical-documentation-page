import React from 'react'
import Header from '../header/Header'
import Constantes from '../section/Constantes'
import DataTypes from '../section/DataTypes'
import Functions from '../section/Functions'
import HelloWorld from '../section/HelloWorld'
import IfElseStatement from '../section/If-ElseStatement'
import Introduction from '../section/Introduction'
import JavascriptAndJava from '../section/JavascriptAndJava'
import Reference from '../section/Reference'
import ShouldAlreadyKnow from '../section/ShouldAlreadyKnow'
import Variables from '../section/Variables'
import While from '../section/While'

function Main() {
    return (
    <>
        <main id="main-doc">
        <Header></Header>
        <Introduction></Introduction>
        <ShouldAlreadyKnow></ShouldAlreadyKnow>
        <JavascriptAndJava></JavascriptAndJava>
        <HelloWorld></HelloWorld>
        <Variables></Variables>
        <Constantes></Constantes>
        <DataTypes></DataTypes>
        <IfElseStatement></IfElseStatement>
        <While></While>
        <Functions></Functions>
        <Reference></Reference>
        </main>
    </>
    )
}

export default Main;