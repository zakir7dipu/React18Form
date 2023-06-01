import React, {useState} from 'react'
import Card from "./ui/Card/index.jsx";
import CardHeader from "./ui/Card/Header";
import From from "./ui/From";
import FromRow from "./ui/From/Row.jsx";
import InputField from "./ui/InputField";
import CardBody from "./ui/Card/Body";
import Switch from "./ui/Switch";
import TimePicker from "./ui/TimePicker/index.jsx";
import {useDispatch} from "react-redux";
import {storeUserInfo} from "./assets/features/userInfo/UserInfoSlice.js";

function App() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [street, setStreet] = useState("")
    const [availablePostalCodes, setAvailablePostalCodes] = useState("")
    const [email, setEmail] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [number, setNumber] = useState("")
    const [isProducent, setProducent] = useState(false)
    const [minimumOrderAmount, setMinimumOrderAmount] = useState("")
    const [provisionFee, setProvisionFee] = useState("")
    const [startWorkingTime, setStartWorkingTime] = useState("")
    const [stopWorkingTime, setStopWorkingTime] = useState("")
    const [agb, setAgb] = useState(false)

    const requestHandler = () => {
        const fromData = new FormData
        if(name){
            fromData.append("name",name)
        }

        if(tel){
            fromData.append("tel",tel)
        }

        if(street){
            fromData.append("street",street)
        }

        if(availablePostalCodes){
            fromData.append("availablePostalCodes",availablePostalCodes)
        }

        if(email){
            fromData.append("email",email)
        }

        if(postalCode){
            fromData.append("postalCode",postalCode)
        }

        if(number){
            fromData.append("number",number)
        }

        if(isProducent){
            fromData.append("isProducent",isProducent)
        } else {
            fromData.append("isProducent",false)
        }

        if(minimumOrderAmount){
            fromData.append("minimumOrderAmount",minimumOrderAmount)
        }

        if(provisionFee){
            fromData.append("provisionFee",provisionFee)
        }

        if(startWorkingTime){
            fromData.append("startWorkingTime",startWorkingTime)
        }

        if(stopWorkingTime){
            fromData.append("stopWorkingTime",stopWorkingTime)
        }

        if(agb){
            fromData.append("agb",agb)
        }

        if(name && tel && street && availablePostalCodes && email && postalCode && number && minimumOrderAmount && provisionFee && startWorkingTime && stopWorkingTime && agb) {
            dispatch(storeUserInfo(fromData))
            resetHandler()
        }
    }

    const resetHandler= ()=>{
        setName("")
        setTel("")
        setStreet("")
        setAvailablePostalCodes("")
        setEmail("")
        setPostalCode("")
        setNumber("")
        setProducent(false)
        setMinimumOrderAmount("")
        setProvisionFee("")
        setStartWorkingTime("")
        setStopWorkingTime("")
        setAgb("")
    }

    return (
        <>
            <div className="container-fluid top-bar">
                <div className="container wrapper-container">
                    <Card>
                        <CardHeader>
                            <h4>add new user info</h4>
                            <p className="subtitle-2">Fill out the form below, required fields are marked with an
                                asterisk.</p>
                        </CardHeader>
                        <From submitHandler={requestHandler}>
                            <CardBody>
                                <FromRow>
                                    <InputField
                                        label={"Name"}
                                        type={"text"}
                                        id={"name"}
                                        required={true}
                                        handler={(value) => {
                                            setName(value)
                                        }}
                                        value={name}
                                        col={6}
                                    />

                                    <InputField
                                        label={"Telephone"}
                                        type={"tel"}
                                        id={"tel"}
                                        required={true}
                                        handler={(value) => {
                                            setTel(value)
                                        }}
                                        value={tel}
                                        col={6}
                                    />
                                </FromRow>

                                <FromRow>
                                    <InputField
                                        label={"Street"}
                                        type={"text"}
                                        id={"street"}
                                        required={true}
                                        handler={(value) => {
                                            setStreet(value)
                                        }}
                                        value={street}
                                        col={12}
                                    />
                                </FromRow>

                                <FromRow>
                                    <InputField
                                        label={"Available Postal Codes"}
                                        type={"text"}
                                        id={"availablePostalCodes"}
                                        required={true}
                                        handler={(value) => {
                                            setAvailablePostalCodes(value)
                                        }}
                                        value={availablePostalCodes}
                                        col={5}
                                    />

                                    <InputField
                                        label={"Email"}
                                        type={"email"}
                                        id={"email"}
                                        required={true}
                                        handler={(value) => {
                                            setEmail(value)
                                        }}
                                        value={email}
                                        col={7}
                                    />
                                </FromRow>

                                <FromRow>
                                    <InputField
                                        label={"Postal Code"}
                                        type={"text"}
                                        id={"postalCode"}
                                        required={true}
                                        handler={(value) => {
                                            setPostalCode(value)
                                        }}
                                        value={postalCode}
                                        col={6}
                                    />

                                    <InputField
                                        label={"Number"}
                                        type={"number"}
                                        id={"number"}
                                        required={true}
                                        handler={(value) => {
                                            setNumber(value)
                                        }}
                                        value={number}
                                        col={6}
                                    />
                                </FromRow>

                                <FromRow>
                                    <div className="col-md-4">
                                        <FromRow>
                                            <div className="col-md-12">
                                                <label htmlFor="isProducent">Is Producent</label>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="input-group style1">
                                                    <Switch
                                                        id={"isProducent"}
                                                        required={false}
                                                        handler={(value) => {
                                                            setProducent(value)
                                                        }}
                                                        value={isProducent}
                                                    />
                                                </div>
                                            </div>
                                        </FromRow>
                                    </div>

                                    <InputField
                                        label={"Minimum Order Amount"}
                                        type={"number"}
                                        id={"minimumOrderAmount"}
                                        required={true}
                                        handler={(value) => {
                                            setMinimumOrderAmount(value)
                                        }}
                                        value={minimumOrderAmount}
                                        col={4}
                                    />
                                    <InputField
                                        label={"Provision Fee"}
                                        type={"number"}
                                        id={"provisionFee"}
                                        required={true}
                                        handler={(value) => {
                                            setProvisionFee(value)
                                        }}
                                        value={provisionFee}
                                        col={4}
                                    />
                                </FromRow>

                                <FromRow>
                                    <div className="col-md-6">
                                        <FromRow>
                                            <div className="col-md-12">
                                                <label htmlFor="startWorkingTime">Start Working Time<sup
                                                    className="required">*</sup></label>
                                            </div>
                                            <div className="col-md-12">
                                                <TimePicker
                                                    id={"startWorkingTime"}
                                                    required={true}
                                                    handler={(value) => {
                                                        setStartWorkingTime(value)
                                                    }}
                                                    value={startWorkingTime}
                                                />
                                            </div>
                                        </FromRow>
                                    </div>

                                    <div className="col-md-6">
                                        <FromRow>
                                            <div className="col-md-12">
                                                <label htmlFor="stopWorkingTime">Stop Working Time<sup
                                                    className="required">*</sup></label>
                                            </div>
                                            <div className="col-md-12">
                                                <TimePicker
                                                    id={"stopWorkingTime"}
                                                    required={true}
                                                    handler={(value) => {
                                                        setStopWorkingTime(value)
                                                    }}
                                                    value={stopWorkingTime}
                                                />
                                            </div>
                                        </FromRow>
                                    </div>
                                </FromRow>

                                <FromRow>
                                    <div className="col-md-12">
                                        <label htmlFor="isProducent">Agb <sup
                                            className="required">*</sup></label>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-group style1">
                                            <Switch
                                                id={"agb"}
                                                required={true}
                                                handler={(value) => {
                                                    setAgb(value)
                                                }}
                                                value={agb}
                                            />
                                        </div>
                                    </div>
                                </FromRow>

                                <FromRow classname={"flex-end"}>
                                    <button type="button" className="btn-light" onClick={resetHandler}>cancel</button>
                                    <button type="submit" className="btn-primary">submit</button>
                                </FromRow>
                            </CardBody>
                        </From>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default App
