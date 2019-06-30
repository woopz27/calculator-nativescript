<template>
    <Page class="page" actionBarHidden="true">
        <StackLayout class="home-panel">
            <TextField text="Label" class="output" v-model="output" hint="0"
                editable="false" />



            <WrapLayout orientation="horizontal" class="input">
                <Button text="C" @tap="onButtonTap('clear', false,true)"
                    class="button" width="90" height="90" />
                <Button text="%" @tap="onButtonTap('%', false,false)" class="button"
                    width="90" height="90" />
                <Button text="<-" @tap="onButtonTap('backspace', false,true)"
                    class="button" width="90" height="90" />
                <Button text="*" @tap="onButtonTap('*', true,false)" class="button"
                    width="90" height="90" />

                <Button text="7" @tap="onButtonTap(7, false, false)" class="button"
                    width="90" height="90" />
                <Button text="8" @tap="onButtonTap(8, false, false)" class="button"
                    width="90" height="90" />
                <Button text="9" @tap="onButtonTap(9, false, false)" class="button"
                    width="90" height="90" />
                <Button text="/" @tap="onButtonTap('/', true, false)" class="button"
                    width="90" height="90" />

                <Button text="4" @tap="onButtonTap(4, false, false)" class="button"
                    width="90" height="90" />
                <Button text="5" @tap="onButtonTap(5, false, false)" class="button"
                    width="90" height="90" />
                <Button text="6" @tap="onButtonTap(6, false, false)" class="button"
                    width="90" height="90" />
                <Button text="+" @tap="onButtonTap('+', true, false)" class="button"
                    width="90" height="90" />

                <Button text="1" @tap="onButtonTap(1, false, false)" class="button"
                    width="90" height="90" />
                <Button text="2" @tap="onButtonTap(2, false, false)" class="button"
                    width="90" height="90" />
                <Button text="3" @tap="onButtonTap(3, false, false)" class="button"
                    width="90" height="90" />
                <Button text="-" @tap="onButtonTap('-', true, false)" class="button"
                    width="90" height="90" />

                <Button text="0" @tap="onButtonTap(0, false, false)" class="button"
                    width="90" height="90" />
                <Button text="." @tap="onButtonTap('.', false, false)" class="button"
                    width="90" height="90" />
                <Button text="(" @tap="onButtonTap('(', false, false)"
                    class="button" width="45" height="90" />
                <Button text=")" @tap="onButtonTap(')', false, false)"
                    class="button" width="45" height="90" />
                <Button text="=" @tap="onButtonTap('equals', false, true)"
                    class="button" width="90" height="90" />
            </WrapLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";

    export default {
        methods: {
            onButtonTap(inputed, isOperator = false, isCommand = false) {
                if (isCommand) {
                    switch (inputed) {
                        case "clear":
                            this.output = "";
                            this.operators = [];
                            break;
                        case "backspace":
                            this.output = this.output.substring(
                                0,
                                this.output.length - 1
                            );
                            break;
                        case "equals":
                            try {
                                this.output += " = " + eval(this.output);
                            } catch (error) {
                                console.log("asd");
                            }
                            break;
                        default:
                            return false;
                    }
                } else {
                    let outputToArray = this.output.split("");
                    let operators = ["*", "/", "+", "-"];
                    if (!this.output.includes("=")) {
                        switch (inputed) {
                            case "*":
                                if (isOperator) {
                                    if (outputToArray[outputToArray - 1] === inputed) {
                                        this.output = this.output;
                                    } else {
                                        if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                                            this.output += inputed;
                                        } else {
                                            this.output = this.output.substring(0,this.output.length - 1);
                                            this.output += inputed;
                                        }
                                    }
                                }
                                break;
                            case "/":
                                if (isOperator) {
                                    let outputToArray = this.output.split("");
                                    if (outputToArray[outputToArray - 1] === inputed) {
                                        this.output = this.output;
                                    } else {
                                        if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                                            this.output += inputed;
                                        } else {
                                            this.output = this.output.substring(0,this.output.length - 1);
                                            this.output += inputed;
                                        }
                                    }
                                }
                                break;
                            case "+":
                                if (isOperator) {
                                    let outputToArray = this.output.split("");
                                    if (outputToArray[outputToArray - 1] === inputed) {
                                        this.output = this.output;
                                    } else {
                                        if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                                            this.output += inputed;
                                        } else {
                                            this.output = this.output.substring(0,this.output.length - 1);
                                            this.output += inputed;
                                        }
                                    }
                                }
                                break;
                            case "-":
                                if (isOperator) {
                                    let outputToArray = this.output.split("");
                                    if (outputToArray[outputToArray - 1] === inputed) {
                                        this.output = this.output;
                                    } else {
                                        if (!operators.includes(outputToArray[outputToArray.length - 1])) {
                                            this.output += inputed;
                                        } else {
                                            this.output = this.output.substring(0,this.output.length - 1);
                                            this.output += inputed;
                                        }
                                    }
                                }
                                break;
                            default:
                                this.output += inputed;
                        }
                    } else {
                        this.output = "";
                        this.output += inputed;
                    }
                }
            }
        },

        watch: {},

        data() {
            return {
                output: ""
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: top;
        font-size: 20;
        background-color: black;
    }

    .output {
        text-align: right;
        border-color: black;
        border-width: 1;
        height: 200;
        padding-top: 160;
        padding-right: 10;
        color:white;
    }

    .input {
        horizontal-align: center;
    }

    .button {
        background-color: black;
        color: orange;
        width: 70;
        height: 70;
    }
</style>