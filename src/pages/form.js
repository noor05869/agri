import React, { useState, useEffect } from "react";
import CropsDistribution from "./CropsDistribution";
import Form3 from "./Form3";
import { message } from "antd";
import FormScreen from "./formScreen";
import OTP from "./OTP";
import moment from "moment";

import axios from "axios";
const steps = [{ id: "1" }, { id: "2" }, { id: "3" }];
function Form() {
  const [Steps, setSteps] = useState("1");
  function handleStep(id) {
    setSteps(id);
  }
  const [Cities, setCities] = useState([]);
  function handleCities(value) {
    if (value === "Punjab") {
      setCities(Punjab);
    } else if (value === "Sindh") {
      setCities(sindh);
    } else if (value === "05") {
      setCities(Blochistan);
    } else if (value === "04") {
      setCities(KPK);
    } else if (value === "07") {
      setCities(Kashmir);
    }
  }
  const [initialValues1, setInitialValues] = useState({
    fname: "",
    contact: "",
    contact2: "",
    optionalContact: "",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    cropsDiss: "",
    Land: "",
    month: "",

    cattles: "",
    targetedmandi: "",
    modeOfInvestment: "",
    percentage: "",
    cropsSale: "",
    seed: "",
    machinery: "",
    cropAdvisory: "",
  });

  const [res, setRes] = useState();
  async function handleSubmit() {
    console.log("val", initialValues1);
    const Params = {
      name: initialValues1.fname,
      phone: initialValues1.contact,
      phone1: "",
      Province: initialValues1.province.value,
      District: initialValues1.district.value,
      Tehsil: initialValues1.tehsil.value,
      Village: initialValues1.village,
      acre: initialValues1.Land,
      ModeOfInvestment: initialValues1.modeOfInvestment.value,
      investmentPercentage: initialValues1.percentage,
      targetedmandi: "asd",
      cropSale: initialValues1.cropsSale.value,
      Seed: initialValues1.seed.value,
      CropsAdvisory: initialValues1.cropAdvisory.value,
      crops: initialValues1.cropsDiss,
      cattle: initialValues1.cattles,
    };

    console.log("params", Params);
    const personalInfo = JSON.stringify(Params);
    const test = { personalInfo: Params };

    console.log("test", test);
    try {
      const { data } = await axios.post(
        "http://13.228.234.94:8080/v1/personalinof",
        {
          personalInfo: {
            name: initialValues1.fname,
            phone: initialValues1.contact,
            phone1: "",

            Province: initialValues1.province.value,
            District: initialValues1.district.value,
            Tehsil: initialValues1.tehsil.value,
            Village: initialValues1.village,
            acre: initialValues1.Land,
            ModeOfInvestment: initialValues1.modeOfInvestment.value,
            investmentPercentage: initialValues1.percentage,
            targetedmandi: initialValues1.targetedmandi.value,
            cropSale: initialValues1.cropsSale.value,
            Seed: initialValues1.seed.value,
            CropsAdvisory: initialValues1.cropAdvisory.value,
          },
          crops: initialValues1.cropsDiss,
          cattle: initialValues1.cattles,
        }
      );

      console.log("res", data);
      setRes(data);
      if (data.success === true) {
        message.success({
          content: "Submitted Successfully",
          className: "custom-class",
          style: {
            marginTop: "74vh",
          },
        });
        handleStep("4");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log("state22", initialValues1);
  console.log("rwspomse+++++", res);

  function handleSchange(i) {
    console.log(i);
  }

  const [cattless, setcattless] = useState([{ Cattles: "", qt: "" }]);
  console.log("CATTT", cattless);
  function addCattles() {
    setcattless([
      ...cattless,
      {
        Cattles: "",
        qt: "",
      },
    ]);
  }
  const removeCattle = (index) => {
    const List = [...cattless];
    List.splice(index, 1);
    setcattless(List);
  };
  const [maxx, setmaxx] = useState(0);
  function handleSelectChange(i, event, name) {
    //  console.log(event.target.value,i,name)
    // console.log("i",i,"eve",moment(event[0]._d).format('MM/DD/YYYY'),"nmae",name)
    if (i < cropDistribution.length) {
      const val = cropDistribution[i].crops;
      handleCropChange(val);
    }
    handleCropChange(event);
    const values = [...cropDistribution];
    const catt = [...cattless];
    if (name === "crops") {
      values[i].crops = event;
    } else if (name === "commodities") {
      values[i].commodities = event;
    } else if (name === "area") {
      values[i].area = event;
    } else if (name === "month") {
      initialValues1.month = event;
      values[i].startDate = moment(event[0]._d).format("MM/DD/YYYY");
      values[i].endDate = moment(event[1]._d).format("MM/DD/YYYY");
    } else if (name === "min_yield") {
      values[i].min_yield = event;
    } else if (name === "max_yield") {
      values[i].max_yield = event;
    } else if (name === "Cattles") {
      catt[i].Cattles = event;
    } else if (name === "qt") {
      catt[i].qt = event;
    }
    initialValues1.cropsDiss = values;
    initialValues1.cattles = catt;
    setcropDistribution(values);
    console.log("cropsdis", cropDistribution);
  }

  const handleChange = (e) => {
    const { value, name, id } = e.target;

    setInitialValues({ ...initialValues1, [name]: value });

    console.log(value, name);

    console.log("state", initialValues1);
  };

  const [cropDistribution, setcropDistribution] = useState([
    {
      crops: "",
      commodities: "",
      area: "",
      max_yield: "",
      min_yield: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleDistributionRemove = (index) => {
    // alert(index)
    const list = [...cropDistribution];
    list.splice(index, 1);
    setcropDistribution(list);
  };
  function handleDistributionAdd() {
    setcropDistribution([
      ...cropDistribution,
      {
        crops: "",
        commodities: "",
        area: "",
        max_yield: "",
        min_yield: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  const handleSelect = (name, value, i) => {
    //  if(value.target.name==="area"){
    //   values[value.target.id].area=value.target.value
    // }

    // handleDisAdd()

    // setInitialValues({...initialValues1,[name]:value})
    setInitialValues({ ...initialValues1, [name]: value });
    // console.log("state",initialValues1)
  };

  function handleprev(id) {
    setSteps(id);
  }
  const [valuues, setvaluues] = useState();

  const [index, setindex] = useState();
  function handleCropChange(value, index) {
    console.log("first", value);
    if (value === "Fruits") {
      // setFruits(true);
      setvaluues(fruits);
      // setSabziyaat(false);
    } else if (value === "Vegetables") {
      // setSabziyaat(true);
      setvaluues(Vegitables);
      // setFruits(false);
    } else if (value === "FoodLegumes") {
      setvaluues(FoodLegumes);
    } else if (value === "CEREALCROPS") {
      setvaluues(CEREALCROPS);
    } else if (value === "OilSeedCrops") {
      setvaluues(OilSeedCrops);
    } else if (value === "FiberCrops") {
      setvaluues(FiberCrops);
    } else if (value === "ForageCrops") {
      setvaluues(ForageCrops);
    } else if (value === "SugarCrops") {
      setvaluues(sugarCrops);
    }

    // else {
    //   setFruits(false);
    //   setSabziyaat(false);
    // }
  }
  useEffect(() => {}, [cattless, cropDistribution]);
  // function handleSubmit() {
  // setInitialValues({
  //   fname: "",
  //   contact: "",
  //   province: "",
  //   district: "",
  //   tehsil: "",
  //   village: "",
  //   Land: "",

  //   crops: "",
  //   commodities: "",
  //   cropsAmount: "",
  //   cropsCycle: "",
  //   cropscycleAmount: "",
  //   cattles: "",
  //   cattlesAmount: "",
  //   date: "",
  //   modeOfInvestment: "",
  //   percentage: "",
  //   cropsSale: "",
  //   seed: "",
  //   machinery: "",
  //   cropAdvisory: "",
  // });
  //   message.success({
  //     content: "Submitted Successfully",
  //     className: "custom-class",
  //     style: {
  //       marginTop: "74vh",
  //     },
  //   });
  //   handleStep("4");
  // }

  switch (Steps) {
    case "1":
      return (
        <FormScreen
          steps={Steps}
          handleStep={handleStep}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleCities={handleCities}
          Cities={Cities}
        />
      );

    case "2":
      return (
        <CropsDistribution
          steps={Steps}
          cropDistribution={cropDistribution}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
          handleDistributionAdd={handleDistributionAdd}
          handleDistributionRemove={handleDistributionRemove}
          valuues={valuues}
          handleSelectChange={handleSelectChange}
          handleSchange={handleSchange}
          addCattles={addCattles}
          removeCattle={removeCattle}
          cattless={cattless}
          max={maxx}
        />
      );
    case "3":
      return (
        <Form3
          steps={Steps}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
          handleSubmit={handleSubmit}
          Cities={Cities}
          response={res}
        />
      );
    case "4":
      return <OTP handleStep={handleStep} number={initialValues1.contact} />;
  }

  return <div>{/* <FormScreen/> */}</div>;
}

export default Form;

const Punjab = [
  { value: "Abdul Hakim", label: "Abdul Hakim ", ulabel: "" },
  { value: "Ahmadpur East", label: "Ahmadpur East", ulabel: "" },
  { value: "Attock Khurd", label: "Attock Khurd", ulabel: "" },
  { value: "Bahawalpur", label: "Bahawalpur" },
  { value: "Bhakkar", label: "Bhakkar" },
  { value: "Bhalwal", label: "Bhalwal" },
  { value: "Chenab Nagar", label: "Chenab Nagar" },
  { value: "Chiniot", label: "Chiniot" },
  { value: "Chishtian", label: "Chishtian" },
  { value: "Chunian", label: "Chunian" },
  { value: "Dera Ghazi Khan", label: "Dera Ghazi Khan" },
  { value: "Dipalpur", label: "Dipalpur" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Gilwala", label: "Gilwala" },
  { value: "Gojra", label: "Gojra" },
  { value: "Gujranwala", label: "Gujranwala" },
  { value: "Gujrat", label: "Gujrat" },
  { value: "Harunabad", label: "Harunabad" },
  { value: "Hasilpur", label: "Hasilpur" },
  { value: "Hassan Abdal", label: "Hassan Abdal" },
  { value: "Hujra Shah Muqim", label: "Hujra Shah Muqim" },
  { value: "Jalalpur Jattan", label: "Jalalpur Jattan" },
  { value: "Jaranwala", label: "Jaranwala" },
  { value: "Jhang City", label: "Jhang City" },
  { value: "Kabirwala", label: "Kabirwala" },
  { value: "Kahror Pakka", label: "Kahror Pakka" },
  { value: "Kamalia", label: "Kamalia" },
  { value: "Kasur", label: "Kasur" },
  { value: "Khanpur", label: "Khanpur" },
  { value: "Kharian", label: "Kharian" },
  { value: "Khushab", label: "Khushab" },
  { value: "Kot Addu", label: "Kot Addu" },
  { value: "Kundian", label: "Kundian" },
  { value: "Lahore", label: "Lahore" },
  { value: "Lala Musa", label: "Lala Musa" },
  { value: "Mandi Bahauddin", label: "Mandi Bahauddin" },
  { value: "Mandi Burewala", label: "Mandi Burewala" },
  { value: "Mian Channun", label: "Mian Channun" },
  { value: "Mianwali", label: "Mianwali" },
  { value: "Multan", label: "Multan" },
  { value: "Muridke", label: "Muridke" },
  { value: "Murree", label: "Murree" },
  { value: "Muzaffargarh", label: "Muzaffargarh" },
  { value: "Nankana Sahib", label: "Nankana Sahib" },
  { value: "Okara", label: "Okara" },
  { value: "Pakpattan", label: "Pakpattan" },
  { value: "Pasrur", label: "Pasrur" },
  { value: "Pattoki", label: "Pattoki" },
  { value: "Rahimyar Khan", label: "Rahimyar Khan" },
  { value: "Rawalpindi", label: "Rawalpindi" },
  { value: "Saddiqabad", label: "Saddiqabad" },
  { value: "Sahiwal", label: "Sahiwal" },
  { value: "Sambrial", label: "Sambrial" },
  { value: "Samundri", label: "Samundri" },
  { value: "Sargodha", label: "Sargodha" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shujaabad", label: "Shujaabad" },
  { value: "Sialkot City", label: "Sialkot City" },
];
const sindh = [
  { value: "Dadu", label: "Dadu" },
  { value: "Hyderabad City", label: "Hyderabad City" },
  { value: "Jacobabad", label: "Jacobabad" },
  { value: "Jamshoro", label: "Jamshoro" },
  { value: "Kandhkot", label: "Kandhkot" },
  { value: "Karachi", label: "Karachi" },
  { value: "Larkana", label: "Larkana" },
  { value: "Mian Sahib", label: "Mian Sahib" },
  { value: "Mirpur Khas", label: "Mirpur Khas" },
  { value: "Mithi", label: "Mithi" },
  { value: "Nawabshah", label: "Nawabshah" },
  { value: "Sukkur", label: "Sukkur" },
  { value: "Tando Allahyar", label: "Tando Allahyar" },
  { value: "Umarkot", label: "Umarkot" },
];
const KPK = [
  { value: "Abbottabad", label: "Abbottabad" },
  { value: "Bannu", label: "Bannu" },
  { value: "Charsadda", label: "Charsadda" },
  { value: "Chitral", label: "Chitral" },
  { value: "Dera Ismail Khan", label: "Dera Ismail Khan" },
  { value: "Hangu", label: "Hangu" },
  { value: "Karak", label: "Karak" },
  { value: "Kohat", label: "Kohat" },
  { value: "Kulachi", label: "Kulachi" },
  { value: "Mansehra", label: "Mansehra" },
  { value: "Mardan", label: "Mardan" },
  { value: "Mingaora", label: "Mingaora" },
  { value: "Nowshera", label: "Nowshera" },
  { value: "Parachinar", label: "Parachinar" },
  { value: "Peshawar", label: "Peshawar" },
  { value: "Risalpur Cantonmen", label: "Risalpur Cantonmen" },
  { value: "Saidu Sharif", label: "Saidu Sharif" },
  { value: "Swabi", label: "Swabi" },
  { value: "Timargara", label: "Timargara" },
];
const Blochistan = [
  { value: "Chaman", label: "Chaman" },
  { value: "Gwadar", label: "Gwadar" },
  { value: "Kalat", label: "Kalat" },
  { value: "Khuzdar", label: "Khuzdar" },
  { value: "Turbat", label: "Turbat" },
  { value: "Zhob", label: "Zhob" },
];
const Kashmir = [
  { value: "Kotli", label: "Kotli" },
  { value: "Muzaffarabad", label: "Muzaffarabad" },
  { value: "New Mirpur", label: "New Mirpur" },
];
const fruits = [
  { value: "Citrus", lable: "Citrus", ulabel: "مالٹے" },
  { value: "Mango", lable: "Mango", ulabel: "آم" },
  { value: "Bannana", lable: "Bannana", ulabel: "کیلا" },
  { value: "Apple", lable: "Apple", ulabel: "سیب" },
  { value: "Grapes", lable: "Grapes", ulabel: "انگور" },
  { value: "Pomegranate", lable: "Pomegranate", ulabel: "انار" },
  { value: "Guava", lable: "Guava", ulabel: "امرود" },
  { value: "Dates", lable: "Dates", ulabel: "کھجور" },
  { value: "Apricots", lable: "Apricots", ulabel: "خوبانئ" },
  { value: "Peach", lable: "Peach", ulabel: "آڑو" },
  { value: "Pear", lable: "Pear", ulabel: "ناشپاتی" },
  { value: "Plum", lable: "Plum", ulabel: "آلوبخارہ" },
  { value: "Fig", lable: "Fig", ulabel: "انجیر" },
  { value: "Almond", lable: "Almond", ulabel: "بادام" },

  { value: "Jaman", lable: "Jaman", ulabel: "جامن" },
  { value: "Litche", lable: "Litche", ulabel: "لئچئ" },
  { value: "Phalsa", lable: "Phalsa", ulabel: "فالسا" },
  { value: "Walnut", lable: "Walnut", ulabel: "اخروٹ" },
  { value: "Ber", lable: "Ber", ulabel: "بئر" },
  { value: "Loquat", lable: "Loquat", ulabel: "لوکاٹ" },
  { value: "Mulbery", lable: "Mulbery", ulabel: "شھتوت" },
  { value: "Strawberry", lable: "Strawberry", ulabel: "اسٹرابیری" },
  { value: "Chiko", lable: "Chiko", ulabel: "چیکو" },
  { value: "Coconut", lable: "Coconut", ulabel: "ناریل" },
  { value: "Cherry", lable: "Cherry", ulabel: "چیری" },
  { value: "Pistachio", lable: "Pistachio", ulabel: "پستھ" },

  { value: "Papaya", lable: "Papaya", ulabel: "پپیتا" },

  { value: "Persimmon", lable: "Persimmon", ulabel: "جاپانی پھل" },

  { value: "Melon", lable: "Melon", ulabel: "خربوزہ" },
  { value: "Olive", lable: "Olive", ulabel: "زیتون" },
  { value: "Pine", lable: "Pine", ulabel: "پائن نٹ" },
  { value: "Imli", lable: "Imli", ulabel: "املی" },
  { value: "Star fruit", lable: "Star fruit", ulabel: "سٹار فروٹ" },
  { value: "Tangerine", lable: "Tangerine", ulabel: "ٹینجیرین" },
  { value: "Rasp berry", lable: "Rasp berry", ulabel: "رس بھری" },
  { value: "Quince", lable: "Quince", ulabel: "سفرجل" },
];
const Vegitables = [
  { value: "Beans", lable: "Beans", ulabel: "پھلیاں" },
  { value: "Beet", lable: "Beet", ulabel: "چقندر" },
  { value: "Bitterground", lable: "Bitterground", ulabel: "کریلا" },
  { value: "Brassica", lable: "Brassica", ulabel: "براسیکا" },
  { value: "Brinjal", lable: "Brinjal", ulabel: "بئنگن" },
  { value: "Cabbage", lable: "Cabbage", ulabel: "گوبھی" },
  { value: "Carrot", lable: "Carrot", ulabel: "گاجر" },
  { value: "Cauliflower", lable: "Cauliflower", ulabel: "گوبھی" },
  { value: "Chilli", lable: "Chilli", ulabel: "مرچ" },
  { value: "Coriander", lable: "Coriander", ulabel: "دھنیا" },
  { value: "Cucumber", lable: "Cucumber", ulabel: "کھیرا" },
  { value: "Garlic", lable: "Garlic", ulabel: "لہسن" },
  { value: "Ginger", lable: "Ginger", ulabel: "ادرک" },
  { value: "Gourd", lable: "Gourd", ulabel: "لوکئ" },
  { value: "Knoikhol", lable: "Knoikhol", ulabel: "جنگلئ گوبھئ" },
  { value: "Lemon", lable: "Lemon", ulabel: "لیموں" },
  { value: "Luffa", lable: "Luffa", ulabel: "تورئ" },
  { value: "Mint", lable: "Mint", ulabel: "پودئنھ" },
  { value: "Okra", lable: "Okra ", ulabel: "بھنڈی" },
  { value: "Onion", lable: "Onion", ulabel: "پیاز" },
  { value: "Peas", lable: "Peas", ulabel: "مٹر" },
  { value: "Potato", lable: "Potato", ulabel: "آلو" },
  { value: "Pumpkin", lable: "Pumpkin", ulabel: "کدو" },
  { value: "Radish", lable: "Radish", ulabel: "گاجر" },
  { value: "Spinach", lable: "Spinach", ulabel: "پالک" },
  { value: "Tomato", lable: "Tomato", ulabel: "ٹماٹر" },

  { value: "Turnip", lable: "Turnip", ulabel: "شلجم" },

  { value: "Yam", lable: "Yam", ulabel: "شکر قندی" },

  { value: "Arum", lable: "Arum", ulabel: "اروئ" },
  { value: "Bottle Gourd", lable: "Bottle Gourd", ulabel: "گئا کدو" },
  { value: "Fenugreek", lable: "Fenugreek", ulabel: "میتھی" },
  { value: "Sponge gourd", lable: "Sponge gourd", ulabel: "تورئ" },
  { value: "Tinda gord", lable: "Tinda gord", ulabel: "ٹئنڈھ" },
  { value: "Sweet potato", lable: "Sweet potato", ulabel: "شکر قندی" },
  { value: "Turmeric", lable: "Turmeric", ulabel: "ھلدئ" },
  { value: "Musk Melon", lable: "Musk Melon", ulabel: "کستورئ خربوزھ" },
];

const FiberCrops = [
  { value: "Cotton", lable: "Cotton", ulabel: "کپاس" },
  { value: "Jute", lable: "Jute", ulabel: "سٹیویا" },
];
const Months = [
  { value: "January", lable: "Januaury" },
  { value: "Faburary", lable: "Faburary" },
  { value: "March", lable: "March" },
  { value: "April", lable: "April" },
  { value: "May", lable: "May" },
  { value: "June", lable: "June" },

  { value: "July", lable: "July" },
  { value: "August", lable: "August" },
  { value: "September", lable: "September" },
  { value: "October", lable: "October" },
  { value: "November", lable: "November" },
  { value: "December", lable: "December" },
];

const FoodLegumes = [
  {
    value: "Kalay Chany/Chickpea",
    lable: "Kalay Chany/Chickpea",
    ulabel: "کالے چنی/چنا",
  },
  {
    value: " White Channy/ White gram",
    lable: " White Channy/ White gram",
    ulabel: "سفید چنے/ سفید چنے",
  },
  { value: "Mung beans", lable: "Mung beans", ulabel: "مینگ پھلیاں" },
  {
    value: "Mash/Black gram",
    lable: "Mash/Black gram",
    ulabel: "میش / سیاہ گرام",
  },
  { value: "Moong", lable: "Moong", ulabel: "مونگ" },
  { value: "Gram", lable: "Gram", ulabel: "گرام" },

  { value: "Field pea", lable: "Field pea", ulabel: "فیلڈ پیا" },
  { value: "Lentil", lable: "Lentil", ulabel: "دال" },
  { value: "Pigeon pean", lable: "Pigeon pean", ulabel: "کبوتر پیان" },
  { value: "Lobia/Cowpea", lable: "Lobia/Cowpea", ulabel: "لوبیا/کاؤپیا" },

  { value: "Rawan/Cowpea", lable: "Rawan/Cowpea", ulabel: "راون / کاؤپیا" },
];

const CEREALCROPS = [
  { value: "Wheat", lable: "Wheat", ulabel: "گندم" },
  { value: "Barley", lable: "Barley", ulabel: "جلی" },
  { value: "Rice", lable: "Rice", ulabel: "چاول" },
  { value: "Maize", lable: "Maize", ulabel: "مکئی" },
  { value: "GreatMillet", lable: "GreatMillet", ulabel: "عظیم باجرا" },
  { value: "Pearl Millet", lable: "Pearl Millet", ulabel: "موتی باجرا" },
];
const OilSeedCrops = [
  {
    value: "Yellow sarsson/Rapseed",
    lable: "Yellow sarsson/Rapseed",
    ulabel: "پیلا سارسسن / ریپسیڈ۔",
  },
  {
    value: " Ghobi sarsoon/Rapseed",
    lable: " Ghobi sarsoon/Rapseed",
    ulabel: "پیلا سارسسن / ریپسیڈ۔",
  },
  {
    value: "Raya/ Indian mustard",
    lable: "Raya/ Indian mustard",
    ulabel: "غیبی سرسون/ ریپسیڈ۔",
  },
  {
    value: "Taranera mustard",
    lable: "Taranera mustard",
    ulabel: "ترانے سرسوں ",
  },
  { value: "Canola/ Rapseed", lable: "Canola/ Rapseed", ulabel: "کینولا" },

  { value: "Peanut", lable: "Peanut", ulabel: "مونگفلی" },
  { value: "Sunflower", lable: "Sunflower", ulabel: "سورج فلو" },
  { value: "Maize", lable: "Maize", ulabel: "مکئی" },
  { value: "Olive", lable: "Olive", ulabel: "زیتون" },
  { value: "Kala till", lable: "Kala till", ulabel: "کلا تک تک" },

  {
    value: "Sufaid till/ sesame",
    lable: "Sufaid till/ sesame",
    ulabel: "سوفڈ تک / سیسم",
  },
  { value: "Alsi/Linseed", lable: "Alsi/Linseed", ulabel: "السی / السی" },
  {
    value: "Guar/ Cluster bean",
    lable: "Guar/ Cluster bean",
    ulabel: "گار / کلسٹر بین",
  },
  { value: "Cotton", lable: "Cotton", ulabel: "کپاس" },
];
const ForageCrops = [
  { value: "Barseem", lable: "Barseem", ulabel: "باریسیم" },
  { value: " Persian Clover", lable: " Persian Clover", ulabel: "فارسی  " },
  { value: "Cluster bean", lable: "Cluster bean", ulabel: "کلسٹر بین" },
  { value: "Chari/Shorgum", lable: "Chari/Shorgum", ulabel: "چرئ" },
  { value: "Taranera mustard", lable: "Taranera mustard", ulabel: "ایٹ" },
  { value: "Oat", lable: "Oat", ulabel: "مکئی" },

  { value: "Haloon", lable: "Haloon", ulabel: "ہیلو" },
  { value: "Cheena", lable: "Cheena", ulabel: "سینہ" },
  { value: "Jantar", lable: "Jantar", ulabel: "جنانت" },
  { value: "Mott. Grass", lable: "Mott. Grass", ulabel: "مٹ. گھاس" },
  { value: "Maize", lable: "Maize", ulabel: "جلی" },
];
const sugarCrops = [
  { value: "Sugarcane", lable: "Sugarcane", ulabel: "گنا" },
  { value: "Sugarbeat", lable: "Sugarbeat", ulabel: "چکندر" },
  { value: "Stevia", lable: "Stevia", ulabel: "سٹیویا" },
];
