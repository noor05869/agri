import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Statistic,
  Input,
  Select,
  message,
  Form,
  InputNumber,
  Button,
  List,
  Descriptions,
  Avatar,
  Alert,
} from "antd";
import { Tehsils } from "./city";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./header";
function Form3({
  handleStep,
  initialValues,
  handleChange,
  handleSelect,
  handleSubmit,
  Cities,
  response,
}) {
  // const history = useHistory();
  const { Option } = Select;
  const {
    modeOfInvestment,
    percentage,
    cropsSale,
    seed,
    machinery,
    cropAdvisory,
    targetedmandi,
  } = initialValues;
  // function handleSubmit() {
  //   if (cropAdvisory.children) {
  //     message.success("Form Submitted Successfully");
  //   }
  // }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [mode, setmode] = useState(true);
  function handleMode(value) {
    if (value === "Aarhti") {
      setmode(true);
      console.log(mode);
    } else if (value === "Personal") {
      setmode(false);
      console.log(mode);
    }
  }

  useEffect(() => {}, [mode]);

  return (
    <div>
      <Header />
      <Row justify="center">
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
                    <Col xs={17} md={8} className="d-flex">
                      <h2 className="font-semibold m-0">E-Agri Form</h2>
                    </Col>
                  </Row>
                </>
              }
            >
              <Row justify="center" gutter={[24, 0]}>
                <Col span={7} md={0} lg={0} x={0}></Col>

                {/* <Card style={{background:"#e7e7e7",border:"none"}} > */}
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
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
                      Mod of Investment{" "}
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
                      سرمایہ کاری کا ذریعہ
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="modeOfInvestment"
                    rules={
                      !modeOfInvestment.children
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
                      onChange={handleMode}
                      onSelect={(value, event) =>
                        handleSelect("modeOfInvestment", event)
                      }
                      //   onChange={handleMode}
                      name="modeOfInvestment"
                      size="large"
                      defaultValue={modeOfInvestment.children}
                    >
                      <Option key="Aarhti"> Aarhti</Option>
                      <Option key="Personal"> Personal </Option>
                    </Select>
                  </Form.Item>
                </Col>
                {/* </Card> */}

                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
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
                      Percentage %{" "}
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
                      % فیصد
                    </span>

                    {/* </label>  */}
                  </div>
                  {mode === true ? (
                    <Form.Item
                      name="percentage"
                      rules={
                        !percentage
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
                        min={1}
                        name="percentage"
                        defaultValue={percentage}
                        value={percentage}
                        // disabled={mode===false? true:false}
                        onChange={handleChange}
                        type="number"
                        style={{
                          width: "100%",
                          fontWeight: "normal",
                          color: "black",
                          height: "40px",
                        }}
                        // onChange={onChange}
                      />
                    </Form.Item>
                  ) : (
                    <Form.Item name="percentage">
                      <Input
                        min={1}
                        name="percentage"
                        defaultValue={percentage}
                        value={percentage}
                        disabled={true}
                        onChange={handleChange}
                        type="number"
                        style={{
                          width: "100%",
                          fontWeight: "normal",
                          color: "black",
                          height: "40px",
                        }}
                        // onChange={onChange}
                      />
                    </Form.Item>
                  )}
                </Col>
                <Col
                  // style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={6}
                  sm={20}
                  md={6}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      Target Mandi{" "}
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
                      ٹارگٹ منڈی
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="targetedmandi"
                    // rules={
                    //   !cropsSale.children
                    //     ? [
                    //         {
                    //           required: true,
                    //           message: "Please Select",
                    //         },
                    //       ]
                    //     : ""
                    // }
                  >
                    <Select
                      showSearch
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onSelect={(value, event) =>
                        handleSelect("targetedmandi", event)
                      }
                      size="large"
                      name="targetedmandi"
                      defaultValue={targetedmandi.children}
                    >
                      {Tehsils &&
                        Tehsils.map((data) => (
                          <Option key={data.value}>{data.label}</Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row justify="center" gutter={[24, 0]}>
                <Col span={6} md={1} lg={0}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
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
                      Crop Sale{" "}
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
                      فصل کی فروخت
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="cropsSale"
                    rules={
                      !cropsSale.children
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
                      onSelect={(value, event) =>
                        handleSelect("cropsSale", event)
                      }
                      size="large"
                      name="cropsSale"
                      defaultValue={cropsSale.children}
                    >
                      <Option key="On Farm">On Farm</Option>
                      <Option key="Mandi ">Mandi </Option>
                      <Option key="Company ">Company </Option>
                      <Option key="Contract ">Contract </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={12}
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
                      Seed{" "}
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
                      </span>
                      بیج
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="seed"
                    rules={
                      !seed.children
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
                      name="seed"
                      size="large"
                      onSelect={(value, event) => handleSelect("seed", event)}
                      defaultValue={seed.children}
                    >
                      <Option key="Own">Own</Option>

                      <Option key="Market">Market</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row justify="center" gutter={[24, 0]}>
                <Col span={6} md={1} lg={0}></Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={11}
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
                      Machinery{" "}
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
                      </span>
                      مشینری
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="machinery"
                    rules={
                      !machinery.children
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
                      size="large"
                      onSelect={(value, event) =>
                        handleSelect("machinery", event)
                      }
                      defaultValue={machinery.children}
                    >
                      <Option value="Own">Own</Option>

                      <Option value="Rented">Rented</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={20}
                  span={7}
                  lg={12}
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
                      Crops Advisory{" "}
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
                      </span>
                      فصلوں کی ایڈوائزری
                    </span>

                    {/* </label>  */}
                  </div>
                  <Form.Item
                    className="username"
                    name="cropAdvisory"
                    rules={
                      !cropAdvisory.children
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
                      size="large"
                      name="cropAdvisory"
                      onSelect={(value, event) =>
                        handleSelect("cropAdvisory", event)
                      }
                      defaultValue={cropAdvisory.children}
                    >
                      <Option value="Self-Experience">Self-Experience</Option>

                      <Option value="Relative or Friend">
                        Relative or Friend
                      </Option>
                      <Option value="Govt. Extension services ">
                        Govt. Extension services{" "}
                      </Option>
                      <Option value="Input Companies">Input Companies</Option>
                      <Option value="Consultant or Advisor ">
                        Consultant or Advisor{" "}
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              {response?.success === false ? (
                <Row justify="center">
                  <Alert
                    style={{ marginBottom: "10px" }}
                    message={response?.message}
                    type="error"
                  />
                </Row>
              ) : (
                ""
              )}
              <Row
                gutter={[24, 0]}
                className="ant-row-flex ant-row-flex-middle"
              >
                <Col xs={24} md={3}>
                  <h6 className="font-semibold m-0"></h6>
                </Col>
                <Col
                  style={{ marginLeft: "10px" }}
                  xs={24}
                  md={2}
                  className="d-flex"
                >
                  <Button
                    style={{
                      marginRight: "10px",
                      background: "white",
                      color: "black",
                      border: "none",
                    }}
                    //  onClick={()=>history.push("/CropsDistribution")}
                    onClick={() => handleStep("2")}
                    type="primary"
                  >
                    Back
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ background: "#273A9E", border: "none" }}
                  >
                    Submit
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

export default Form3;
