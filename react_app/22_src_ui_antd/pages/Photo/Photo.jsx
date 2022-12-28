import React, {Component} from 'react';
import { Col, Divider, Row } from 'antd';

const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };
class Photo extends Component {
    render() {
        return (
            <>
                <Divider orientation="left">Responsive</Divider>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <div style={style}><img src={'/img/7f722f3e7209fc7034f0c122a8e29e4.jpg'} alt={'franco_with_flower'} width={'100%'}/></div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>

            </>
        );
    }
}

export default Photo;