import Vue from 'vue';
import ElementUI, {Button, Col, Form, FormItem, Input, Row, Main, Card, Table, TableColumn} from 'element-ui';
import '@/assets/theme/index.css';
import '@/common/css/menu-header.css';
import '@/common/css/main.css';
import i18n from "@/i18n/i18n";
import chart from "@/common/js/chart";
// import CKEditor from '@ckeditor/ckeditor5-vue';
import PlanReportTemplate from "@/template/report/plan/PlanReportTemplate";
// import PlanReport from "@/template/report/plan/PlanReport";


Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(chart);
Vue.use(Main);
Vue.use(Card);
Vue.use(TableColumn);
Vue.use(Table);
// Vue.use(CKEditor);


new Vue({
  el: '#planReport',
  i18n,
  // render: h => h(PlanReport)
  render: h => h(PlanReportTemplate)
});
