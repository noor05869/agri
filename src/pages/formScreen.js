import React, { useState } from "react";
import "./required.css";
import { Tehsils } from "./city";
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Select,
  Form,
  InputNumber,
  Button,
  List,
  Descriptions,
  Avatar,
} from "antd";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./header";

function FormScreen({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleCities,
  Cities,
}) {
  const { fname, contact, province, district, tehsil, village, contact2 } =
    initialValues;
  const { Option } = Select;
  // const history = useHistory();
  console.log("ttttt", Tehsils);
  function handleSubmit(values) {
    console.log(values);
    handleStep("2");
  }
  function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

    return true;
  }

  const Provinces = [
    { value: "06", label: "Fedral Capital", Province_code: "06" },
    { value: "03", label: "Punjab", Province_code: "03" },
    { value: "02", label: "Sindh", Province_code: "02" },
    { value: "05", label: "Balochistan", Province_code: "05" },
    { value: "04", label: "Khyber Pakhtunkhwa", Province_code: "04" },
    { value: "07", label: "Azad And Jamu Kashmir", Province_code: "07" },
    { value: "01", label: "Fata / Fana", Province_code: "01" },
  ];
  const Tehsil = [
    { value: "Pakpattan ", label: "Pakpattan Tehsil" },
    { value: "Phalia", label: "Phalia" },
    { value: "Pasrur ", label: "Pasrur Tehsil" },
    { value: "PindDadan", label: "Pind Dadan Khan Tehsil" },
    { value: "PindiBhattian", label: "Pindi Bhattian" },
    { value: "Piplan ", label: "Piplan Tehsil" },
  ];

  return (
    <div>
      <Header />
      <Row style={{ marginBottom: "100px" }} justify="center">
        <Col xs={24} lg={17} className="mb-24">
          <Form onFinish={handleSubmit}>
            <Card
              style={{ background: "#e7e7e7", borderRadius: "20px" }}
              // className="payment-method-card"
              className="header-solid h-full ant-card-p-0"
              title={
                <>
                  <Row
                    gutter={[24, 0]}
                    className="ant-row-flex ant-row-flex-middle"
                  >
                    <Col xs={24} md={7}></Col>
                    <Col xs={17} md={7} lg={8} className="d-flex">
                      <h2 className="font-semibold m-0">E-Agri Form</h2>
                    </Col>
                  </Row>
                  <Row justify="start">
                    <Col lg={2} md={2} xs={8}></Col>
                    <Col xs={14} md={4} lg={2}>
                      {/* <h5 className="farmer" >Farmers Data</h5> */}
                    </Col>
                  </Row>
                </>
              }
            >
              <Row>
                {" "}
                <h5 className="farmer">Personal Info</h5>
              </Row>
              <Row gutter={[24, 0]} justify="center">
                <Col span={7} md={0} lg={0}>
                  {" "}
                </Col>

                {/* <Card style={{background:"#e7e7e7",border:"none"}} > */}
                <Col
                  // style={{ marginLeft: "12px" }}
                  xs={19}
                  span={7}
                  lg={11}
                  sm={20}
                  md={6}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      Name{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      نام
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    name="fname"
                    rules={
                      !fname
                        ? [
                            {
                              required: true,
                              message: "Please Fill",
                            },
                          ]
                        : ""
                    }
                  >
                    <Input
                      style={{ color: "black", fontWeight: "normal" }}
                      defaultValue={fname}
                      id="fname"
                      type="text"
                      value={fname}
                      onChange={handleChange}
                      name="fname"
                      placeholder="Name"
                    />
                  </Form.Item>
                </Col>
                {/* </Card> */}

                <Col
                  // style={{ marginLeft: "10px" }}
                  xs={19}
                  span={7}
                  lg={6}
                  sm={20}
                  md={6}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      Contact 1{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      رابطہ نمبر
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    name="contact"
                    rules={
                      !contact
                        ? [
                            {
                              required: true,
                              message: "Please Fill",
                            },
                          ]
                        : ""
                    }
                  >
                    <Input
                      id="contact"
                      onKeyPress={isNumberKey}
                      // type="number"
                      defaultValue={contact}
                      name="contact"
                      maxLength="11"
                      minLength="11"
                      // prefix={<PhoneOutlined/>}

                      placeholder="03xx-0000000"
                      value={contact}
                      onChange={handleChange}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "normal",
                        border: "rounded",
                        height: "40px",
                      }}
                      // onChange={onChange}
                    />
                  </Form.Item>

                  {/* </Form.Item> */}
                </Col>
                <Col
                  // style={{ marginLeft: "8px" }}
                  xs={19}
                  span={7}
                  lg={6}
                  sm={20}
                  md={6}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      Contact 2{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                      </span>{" "}
                      رابطہ نمبر
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    name="contact2"
                    // rules={
                    //   !contact
                    //     ? [
                    //         {
                    //           required: true,
                    //           message: "Please Fill",
                    //         },
                    //       ]
                    //     : ""
                    // }
                  >
                    <Input
                      id="optionalContact"
                      onKeyPress={isNumberKey}
                      // type="number"
                      defaultValue=""
                      name="contact2"
                      maxLength="11"
                      minLength="11"
                      placeholder="03xx-0000000"
                      value={contact2}
                      onChange={handleChange}
                      style={{
                        color: "black",
                        width: "100%",
                        fontWeight: "normal",
                        border: "rounded",
                        // marginTop: "5px",git
                        height: "40px",
                      }}
                      // onChange={onChange}
                    />
                  </Form.Item>

                  {/* </Form.Item> */}
                </Col>
              </Row>
              <Row gutter={[24, 0]} justify="center">
                <Col span={6} md={0} lg={0}></Col>
                <Col xs={19} span={7} lg={11} sm={20} md={9}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      Province{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      صوبہ
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="Province"
                    defaultValue={province.value}
                    rules={
                      !province.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      showSearch
                      onChange={handleCities}
                      filterOption={(input, option) =>
                        option.value
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      // onChange={handleSelect("province")}
                      onSelect={(value, event) =>
                        handleSelect("province", event)
                      }
                      size="large"
                      name="province"
                      defaultValue={province.value}
                    >
                      {Provinces.map((data) => (
                        <Option key={data.label}>
                          <div>
                            {" "}
                            <p>{data.label}</p>
                          </div>
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  // style={{ marginLeft: "10px" }}
                  xs={19}
                  span={7}
                  lg={12}
                  sm={20}
                  md={9}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      District{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      ضلع
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="District"
                    rules={
                      !district.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      showSearch
                      filterOption={
                        (input, option) =>
                          option.value
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        // console.log(input,"-----",option)
                      }
                      name="district"
                      size="large"
                      onSelect={(value, event) =>
                        handleSelect("district", event)
                      }
                      defaultValue={district.value}
                    >
                      {Cities &&
                        Cities.map((data) => (
                          <Option key={data.value}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>{data.label}</p>
                              <p>{data.ulabel}</p>
                            </div>
                          </Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[24, 0]} justify="center">
                <Col span={6} md={0} lg={0}></Col>
                <Col
                  // style={{ marginLeft: "10px" }}
                  xs={19}
                  span={7}
                  lg={11}
                  sm={20}
                  md={9}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      Tehsil{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {" "}
                        *
                      </span>{" "}
                      تحصیل
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="Tehsil"
                    rules={
                      !tehsil.children
                        ? [
                            {
                              required: true,
                              message: "Please Select",
                            },
                          ]
                        : ""
                    }
                  >
                    <Select
                      showSearch
                      size="large"
                      name="tehsil"
                      defaultValue={tehsil.children}
                      onSelect={(value, event) => handleSelect("tehsil", event)}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {Tehsils.map((data) => (
                        <Option key={data.value}>{data.label}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  // style={{ marginLeft: "10px" }}
                  xs={19}
                  span={7}
                  lg={12}
                  sm={20}
                  md={9}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {/* <label
                    htmlFor="contact"
                     className="col-12 col-form-label fw-500"
                      style={{fontWeight:"bold"}}
                  >  */}
                    <span>
                      Village{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        *{" "}
                      </span>{" "}
                    </span>
                    <span style={{ fontSize: "1rem", marginRight: "5px" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        *{" "}
                      </span>{" "}
                      گاؤں
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    name="village"
                    rules={
                      !village
                        ? [
                            {
                              required: true,
                              message: "Please Fill",
                            },
                          ]
                        : ""
                    }
                  >
                    <Input
                      style={{ color: "black", fontWeight: "normal" }}
                      name="village"
                      value={village}
                      defaultValue={village}
                      onChange={handleChange}
                      type="text"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                justify="start"
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col span={7} md={1} lg={0}></Col>
                <Col
                  style={{ marginTop: "10px" }}
                  xs={22}
                  span={7}
                  lg={5}
                  xl={4}
                  xxl={3}
                  sm={20}
                  md={5}
                  className="d-flex"
                >
                  <Button
                    className="form1next"
                    style={{
                      background: "#273A9E",
                      border: "none",
                      marginRight: "38px",
                    }}
                    // onClick={()=>history.push("/CropsDistribution")}
                    // onClick={handleSubmit}
                    type="primary"
                    htmlType="submit"

                    // type="primary"
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </Card>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default FormScreen;
