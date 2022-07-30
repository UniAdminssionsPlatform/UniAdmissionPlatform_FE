import { CallAPI } from './axiosBase';
import {
    ENDPOINT_REPORT_GET_EVENT,
    ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING
} from "../constants/Endpoints/ReportEndpoint";
export const getStudentRecordSettingReportService = (data) => CallAPI(`${ENDPOINT_REPORT_GET_STUDENT_RECORD_SETTING}?event-id=${data.eventId}&token=${data.token}`, 'GET');
export const getStudentReportService = (data) => CallAPI(`${ENDPOINT_REPORT_GET_EVENT}?`, 'GET');
