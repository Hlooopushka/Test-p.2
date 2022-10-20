import { Tabs } from 'antd';
import { Col, Row } from 'antd';
import PlannerItem from 'components/shared-components/PlannerItem';
import React from 'react';



const ContentPage = () => (
  <>
  <Row>
      <Col span={12}><Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Tab 1" key="1">
      <PlannerItem/>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
      Content of Tab Pane 1
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
      Content of Tab Pane 1
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 4" key="4">
      Content of Tab Pane 2
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 5" key="5">
      Content of Tab Pane 3
    </Tabs.TabPane>
  </Tabs></Col>
      <Col span={12}><div className='planner-area'></div></Col>
    </Row>
  </>
  
);

export default ContentPage;