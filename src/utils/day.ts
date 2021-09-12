import moment from "moment";

export default function day(seconds:number){
    const str = moment(seconds * 1000).calendar().split(' at ')[0].trim();
    return str;
}