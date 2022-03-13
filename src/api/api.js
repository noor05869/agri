import axios from "axios";
class PostData {
    constructor() {
      this.result = [];
    }

    Form = (data) => {
        console.log("send Data",data)
        // const res = async () => {
        //   const resp = await axios
        //     .post("personalinof", {
        //       idType: data.Type.value,
        //       residentialStatus: data.Status.value,
        //       CNIC: data?.CNIC,
        //       firstName: data.FullName,
        //       issueDate: data.IssueDate,
        //       email: data.email,
        //       number: "0" + data.phone.slice(-10),
        //       IBAN: data.IBANnumber.iban,
        //       relationWithMobileNo: data.relationWithMobileNo.value,
        //       relativeCNIC: null,
        //       proofofRelationship: null,
        //     })
        //     .catch(function (error) {
        //       // alert(error.response.data.message);
        //       console.log(error.response);
        //     });
        //   return resp;
        // };
        return res();
      };


}