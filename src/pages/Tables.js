/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Space,
  Input,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Card,
} from "antd";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Images

function Tables() {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const { Header, Footer, Content } = Layout;
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [cropCycle, setcropCycle] = useState([
    {
      Commodity: "",
      Maize: "",
      Maize2: "",
      Potato: "",
    },
    {
      Commodity: "",
      Maize: "",
      Maize2: "",
      Potato: "",
    },
  ]);
const history = useHistory()
  const [cropDistribution, setcropDistribution] = useState([
    {
      cropDistribution: "",
      Amount: "",
    },
  ]);

  const [ajnas, setajnas] = useState(false);
  const [Fruits, setFruits] = useState(false);
  const [Sabziyaat, setSabziyaat] = useState(false);
  const fruits = [
    { value: "Fruits", lable: "Fruits" },
    { value: "Citrus", lable: "Citrus" },
    { value: "Mnago", lable: "Mnago" },
    { value: "Banana", lable: "Banana" },
    { value: "Apple", lable: "Apple" },
    { value: "Grapes", lable: "Grapes" },
    { value: "Pomegranate", lable: "Pomegranate" },
    { value: "Guava", lable: "Guava" },
    { value: "Dates", lable: "Dates" },
    { value: "Apricots", lable: "Apricots" },
    { value: "Peach", lable: "Peach" },
    { value: "Pear", lable: "Pear" },
    { value: "Plum", lable: "Plum" },
    { value: "Fig", lable: "Fig" },
    { value: "Jaman", lable: "Jaman" },
    { value: "Litche", lable: "Litche" },
    { value: "Phalsa", lable: "Phalsa" },
    { value: "Walnut", lable: "Walnut" },
    { value: "Ber", lable: "Ber" },
    { value: "Loquat", lable: "Loquat" },
    { value: "Mulbery", lable: "Mulbery" },
    { value: "Strawberry", lable: "Strawberry" },
    { value: "Chiko", lable: "Chiko" },
    { value: "Coconut", lable: "Coconut" },
    { value: "Cherry", lable: "Cherry" },
    { value: "Pistachio", lable: "Pistachio" },

    { value: "Papaya", lable: "Papaya" },

    { value: "Persimmon", lable: "Persimmon" },

    { value: "Melon", lable: "Melon" },
    { value: "Olive", lable: "Olive" },
    { value: "Pine", lable: "Pine" },
    { value: "Imli", lable: "Imli" },
    { value: "Star fruit", lable: "Star fruit" },
    { value: "Tangerine", lable: "Tangerine" },
    { value: "Rasp berry", lable: "Rasp berry" },
    { value: "Quince", lable: "Quince" },
  ];
  const Vegitables = [
    { value: "Beans", lable: "Beans" },
    { value: "Beet", lable: "Beet" },
    { value: "Bitterground", lable: "Bitterground" },
    { value: "Brassica", lable: "Brassica" },
    { value: "Brinjal", lable: "Brinjal" },
    { value: "Cabbage", lable: "Cabbage" },
    { value: "Carrot", lable: "Carrot" },
    { value: "Cauliflower", lable: "Cauliflower" },
    { value: "Chilli", lable: "Chilli" },
    { value: "Coriander", lable: "Coriander" },
    { value: "Cucumber", lable: "Cucumber" },
    { value: "Garlic", lable: "Garlic" },
    { value: "Ginger", lable: "Ginger" },
    { value: "Gourd", lable: "Gourd" },
    { value: "Knoikhol", lable: "Knoikhol" },
    { value: "Lemon", lable: "Lemon" },
    { value: "Luffa", lable: "Luffa" },
    { value: "Mint", lable: "Mint" },
    { value: "Ber", lable: "Ber" },
    { value: "Loquat", lable: "Loquat" },
    { value: "Mulbery", lable: "Mulbery" },
    { value: "Strawberry", lable: "Strawberry" },
    { value: "Chiko", lable: "Chiko" },
    { value: "Coconut", lable: "Coconut" },
    { value: "Cherry", lable: "Cherry" },
    { value: "Pistachio", lable: "Pistachio" },

    { value: "Papaya", lable: "Papaya" },

    { value: "Persimmon", lable: "Persimmon" },

    { value: "Melon", lable: "Melon" },
    { value: "Olive", lable: "Olive" },
    { value: "Pine", lable: "Pine" },
    { value: "Imli", lable: "Imli" },
    { value: "Star fruit", lable: "Star fruit" },
    { value: "Tangerine", lable: "Tangerine" },
    { value: "Rasp berry", lable: "Rasp berry" },
    { value: "Quince", lable: "Quince" },
  ];

  const cerealCrops = [
    { value: "Wheat", lable: "Wheat" },
    { value: "Barley", lable: "Barley" },
    { value: "Maize", lable: "Maize" },
    { value: "Great Millet", lable: "Great Millet" },
    { value: "Pearl Millet", lable: "Pearl Millet" },
  ];
  const { Title } = Typography;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleCropDisChange = (e, index) => {
  //   console.log(e.target.value)
  //   const { name, value } = e.target;
  //   const list = [...cropDistribution];
  //   list[index][name] = value;
  //   setcropDistribution(list);
  // };

  function handleCropChange(value) {
    // alert(value)
    if (value === "fruits") {
      setFruits(true);
      setSabziyaat(false);
    } else if (value === "Sabziyaa") {
      setSabziyaat(true);
      setFruits(false);
    } else {
      setFruits(false);
      setSabziyaat(false);
    }
  }
  function handleAdd() {
    setcropCycle([
      ...cropCycle,
      { Commodity: "", Maize: "", Maize2: "", Potato: "" },
    ]);
  }
  const handleRemoveClick = (index) => {
    const list = [...cropCycle];
    list.splice(index, 1);
    setcropCycle(list);
  };

  function handleDistributionAdd() {
    setcropDistribution([
      ...cropDistribution,
      { cropDistribution: "", Amount: "" },
    ]);
  }
  const handleDistributionRemove = (index) => {
    const list = [...cropDistribution];
    list.splice(index, 1);
    setcropDistribution(list);
  };
  function handleMode(value) {
    if (value === "fruits") {
      setFruits(true);
    } else {
      setFruits(false);
    }
  }

  return (
    <>
      <div className="tabled">
        <Card>
          <Row gutter={[20, 0]}>
            <Layout className="layout-default layout-signin">
              <div className="header-col header-brand">
                <h5>Muse Dashboard</h5>
              </div>
              <div className="header-col header-nav"></div>

              <Content className="signin">
                <Form onFinish={onFinish}>
                  <Row md={12} align="middle" style={{ marginLeft: "300px" }}>
                    <Col span={5} level={5}>
                      <Form.Item
                        className="username"
                        label="Name"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>
                      <Form.Item
                        className="username"
                        label="Address"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="address" />
                      </Form.Item>

                      <Form.Item
                        className="username"
                        label="District"
                        name="district"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          tyle={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          defaultValue="lucy"
                          style={{ width: 200 }}
                        >
                          <Option value="">Select</Option>

                          <Option value="Sabziyaa">lh</Option>
                          <Option value="Baghaat">Ib</Option>
                          <Option value="Chara">kara</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <span style={{ color: "white" }}>sdds</span>
                    <Col
                      span={7}
                      style={{ marginRight: "10px" }}
                      className="mr-5"
                    >
                      <Form.Item
                        className="username"
                        label="Contact"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <InputNumber
                          style={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          // onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item
                        className="username"
                        label="Tehsil"
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="address" />
                      </Form.Item>
                      <Form.Item
                        className="username"
                        label="Total land"
                        name="total land"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="total land" />
                      </Form.Item>
                    </Col>

                    <Row></Row>
                  </Row>
                  <h3 style={{ marginLeft: "300px" }}>Crops Distribution</h3>

                  {cropDistribution.map((data, i) => (
                    <>
                      <Row style={{ marginLeft: "300px" }}>
                        <Col span={5}>
                          <Select
                            onChange={handleCropChange}
                            name="Commodity"
                            value={data.Commodity}
                            size="large"
                            defaultValue="lucy"
                            style={{ width: 200, marginTop: "30px" }}
                          >
                            <Option value="fruits">fruits</Option>

                            <Option value="Sabziyaa"> Sabziyaat </Option>
                            <Option value="Baghaat"> Baghaat </Option>
                            <Option value="Chara"> Chara jaat </Option>
                          </Select>

                          {/* <Space  style={{marginTop:"30px"}}  direction="vertical" size={12}>
    <RangePicker
    size="large"
    />
    
    
  </Space>, */}
                        </Col>
                        <span style={{ color: "white" }}>sdds</span>
                        <Col span={8}>
                          {Fruits ? (
                            <Form.Item
                              className="username"
                              label="Fruits"
                              name="select"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your email!",
                                },
                              ]}
                            >
                              <Select
                                size="large"
                                tyle={{
                                  width: "100%",
                                  border: "rounded",
                                  height: "40px",
                                }}
                                defaultValue="fruits"
                                style={{ width: 200 }}
                              >
                                {fruits.map((data) => (
                                  <Option value={data.value}>
                                    {data.lable}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          ) : (
                            ""
                          )}

                          {Sabziyaat ? (
                            <Form.Item
                              className="username"
                              label="Sabziyaa"
                              name="select"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your email!",
                                },
                              ]}
                            >
                              <Select
                                size="large"
                                tyle={{
                                  width: "100%",
                                  border: "rounded",
                                  height: "40px",
                                }}
                                defaultValue="sabziaa"
                                style={{ width: 200 }}
                              >
                                {Vegitables.map((data) => (
                                  <Option value={data.value}>
                                    {data.lable}
                                  </Option>
                                ))}
                              </Select>
                            </Form.Item>
                          ) : (
                            ""
                          )}
                          <Form.Item
                            className="username"
                            label="Amount"
                            name="ammount"
                            rules={[
                              {
                                required: true,
                                message: "Please input your email!",
                              },
                            ]}
                          >
                            <InputNumber
                              type="number"
                              style={{
                                width: "50%",
                                border: "rounded",
                                height: "40px",
                              }}
                              // onChange={onChange}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </>
                  ))}
                  <Button
                    onClick={handleDistributionAdd}
                    style={{
                      width: "10%",
                      marginLeft: "600px",
                      marginTop: "10px",
                    }}
                    type="secondary"
                  >
                    {" "}
                    +Add{" "}
                  </Button>
                  <Button
                    onClick={handleDistributionRemove}
                    style={{ width: "10%", marginLeft: "10px" }}
                    type="secondary"
                  >
                    {" "}
                    -Remove{" "}
                  </Button>

                  <h3 style={{ marginLeft: "300px", marginTop: "30px" }}>
                    Crop Cycle{" "}
                  </h3>
                  <Row style={{ marginLeft: "300px" }}>
                    {cropCycle.map((data) => (
                      <>
                        <Col span={8}>
                          <Form.Item
                            className="username"
                            label="Crops"
                            name="commodity"
                            rules={[
                              {
                                required: true,
                                message: "Please input your email!",
                              },
                            ]}
                          >
                            <Select
                              label="commodity"
                              size="large"
                              defaultValue=""
                              style={{ width: 330 }}
                            >
                              {cerealCrops.map((data) => (
                                <Option value={data.value}>{data.lable}</Option>
                              ))}
                              <Option value="potato">potato</Option>
                            </Select>
                          </Form.Item>
                          <Space
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                            direction="vertical"
                            size={12}
                          >
                            <RangePicker size="large" />
                          </Space>
                        </Col>
                        <span style={{ color: "white" }}>sdds</span>
                        <Col span={8}>
                          <Form.Item
                            className="username"
                            label={`Yield`}
                            name="cropsAmount"
                            rules={[
                              {
                                required: true,
                                message: "Please input your email!",
                              },
                            ]}
                          >
                            <Input
                              name="cropsAmount"
                              // vale={data.Amount}
                              // onChange={handleCropDisChange}
                              type="number"
                              style={{
                                width: "50%",

                                height: "40px",
                              }}
                              // onChange={onChange}
                            />
                          </Form.Item>
                        </Col>
                      </>
                    ))}
                  </Row>

                  <Button
                    onClick={handleAdd}
                    style={{ width: "10%", marginLeft: "600px" }}
                    type="secondary"
                  >
                    {" "}
                    +Add{" "}
                  </Button>
                  <Button
                    onClick={handleRemoveClick}
                    style={{ width: "10%", marginLeft: "10px" }}
                    type="secondary"
                  >
                    {" "}
                    -Remove{" "}
                  </Button>

                  <Row style={{ marginTop: "30px", marginLeft: "300px" }}>
                    <Col span={8}>
                      <Form.Item
                        className="username"
                        label="Cattles"
                        name="cattles"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          defaultValue=""
                          style={{ width: 330 }}
                        >
                          <Option value="Buffalo">Buffalo</Option>
                          <Option value="Goat">Goat</Option>

                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <span style={{ color: "white" }}>sdds</span>
                    <Col span={8}>
                      <Form.Item
                        className="username"
                        label={`amount`}
                        name="amount"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input
                          name="Amount"
                          // vale={data.Amount}
                          // onChange={handleCropDisChange}
                          type="number"
                          style={{
                            width: "50%",

                            height: "40px",
                          }}
                          // onChange={onChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <h3 style={{ marginTop: "30px", marginLeft: "300px" }}>
                    Mode of transport
                  </h3>
                  <Row style={{ marginTop: "30px", marginLeft: "300px" }}>
                    <Col span={6}>
                      <Form.Item
                        className="username"
                        label={`Cattles`}
                        name="amount"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          onChange={handleMode}
                          name="mode of investment"
                          size="large"
                          tyle={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          defaultValue=""
                          style={{ width: 330 }}
                        >
                          <Option value="Aarhti"> Aarhti</Option>
                          <Option value="personal "> personal </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <span style={{ color: "white" }}>sdds</span>
                    <Col span={8}>
                      {/* {arhiti===true ? 
                      <Form.Item
                      className="username"
                      label={`percentage`}
                      name="per"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        }
                      ]}
                    >
                      <Input
                      name="per"
                      // vale={data.Amount}
                      // onChange={handleCropDisChange}
                      type="number"
                        style={{
                          width: "100%",
                          
                          height: "40px",
                        }}
                        // onChange={onChange}
                      />
                    </Form.Item>:""} */}
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "30px", marginLeft: "300px" }}>
                    <Col span={8}>
                      <Form.Item
                        className="username"
                        label="CropSale"
                        name="crop"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          tyle={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          defaultValue=""
                          style={{ width: 330 }}
                        >
                          <Option value="On Farm">On Farm</Option>
                          <Option value="Mandi ">Mandi </Option>
                          <Option value="Company ">Company </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <span style={{ color: "white" }}>sdds</span>
                    <Col span={8}>
                      <Form.Item
                        className="username"
                        label="Seed"
                        name="seed"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          tyle={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          defaultValue="lucy"
                          style={{ width: 330 }}
                        >
                          <Option value="Own">Own</Option>

                          <Option value="Market">Market</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        className="username"
                        label="Crop Advisory "
                        name="crp["
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          tyle={{
                            width: "100%",
                            border: "rounded",
                            height: "40px",
                          }}
                          defaultValue="lucy"
                          style={{ width: 330 }}
                        >
                          <Option value="Self-Experience">
                            Self-Experience
                          </Option>

                          <Option value="Relative or Friend">
                            Relative or Friend
                          </Option>
                          <Option value="Govt. Extension services ">
                            Govt. Extension services{" "}
                          </Option>
                          <Option value="Input Companies">
                            Input Companies
                          </Option>
                          <Option value="Consultant or Advisor ">
                            Consultant or Advisor{" "}
                          </Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item>
                    <Button
                      style={{
                        width: "10%",
                        marginLeft: "500px",
                        marginTop: "30px",
                      }}
                      type="primary"
                      htmlType="submit"
                      onClick={history.push("/CropsDistribution")}
                    >
                      SUBMIT
                    </Button>
                  </Form.Item>
                </Form>
              </Content>
            </Layout>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Tables;
