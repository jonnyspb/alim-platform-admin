import React from 'react';
import {Col, Menu, Row} from "antd";
import {Header} from "antd/es/layout/layout";
import { useNavigate } from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";


const MyHeader = () => {
    const navigate = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth);

    const dispatch = useDispatch();

    const logout = (event:any) => {
        // event.preventDefault();
        dispatch(AuthActionCreators.logout())
    }
    return (
        <Header className="header">
            <Row>
                <Col span={12}>
                    <div className="logo" >
                        Alim Platform
                    </div>
                </Col>
                { isAuth &&
				<Col span={12} >
					<Row justify="end">
						<Menu mode="horizontal" selectable={false}>
							<Menu.Item key="1" onClick={ logout }
                            >Logout
							</Menu.Item>
						</Menu>
					</Row>
				</Col>
                }

            </Row>

        </Header>
    );
};

export default MyHeader;