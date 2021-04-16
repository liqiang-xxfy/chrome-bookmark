import React, { Component } from 'react';
import './home.scss';
import { Tree, Input, Button, Loading } from 'element-react';
import 'element-theme-default';
import axios from 'axios';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            options: {
                children: 'children',
                label: 'title',
            },
            loading: false,
        };
    }
    componentDidMount() {
        this.getLocalData();
    }
    openUrl = params => {
        if (!params.url) return;
        window.open(params.url, '_blank');
    };
    getLocalData = () => {
        import('@/assets/chrome-bookmark.json')
            .then(data => {
                let { default: arrs } = data;
                this.setState({
                    data: arrs,
                });
            })
            .catch(error => {
                console.log('error:', error);
            });
    };

    getUrlData = () => {
        if (this.state.loading) return;
        this.setState({
            loading: true,
        });

        axios
            .get('https://api.github.com/repos/liqiang-xxfy/chrome-bookmark/contents/docs/chrome-bookmark.json?ref=master')
            // .get('@/../public/chrome-bookmark.json')
            .then(resp => {
                if (resp.status === 200) {
                    let data = resp.data.content;
                    let str = Buffer.from(data, 'base64').toString();
                    let arrs = JSON.parse(str);
                    this.setState({
                        data: arrs,
                    });
                } else throw new Error('no data');
            })
            .catch(e => {
                console.log(`e`, e);
            })
            .finally(() => {
                this.setState({
                    loading: false,
                });
            });
    };

    delete = () => {
        this.setState({
            data: [],
        });
    };

    render() {
        const { data, options, loading } = this.state;
        // console.log(`json`, json);
        return (
            <div className="home">
                <div className="search">
                    <Input placeholder="输入关键字进行过滤" onChange={text => this.tree.filter(text)} />
                    <Button onClick={this.getLocalData}>更新</Button>
                    <Button onClick={this.delete}>删除</Button>
                </div>
                <Loading loading={loading}>
                    <Tree
                        ref={e => (this.tree = e)}
                        data={data}
                        highlightCurrent={true}
                        options={options}
                        nodeKey="id"
                        indent={25}
                        defaultExpandedKeys={['1']}
                        // defaultExpandAll={true}
                        accordion={true}
                        // renderContent={(nodeModel, data, store) => {
                        //     console.log(`nodeModel`, nodeModel);
                        //     return (
                        //         <span>
                        //             <img src={data.url} />
                        //             <span className="el-tree-node__label">{data.title}</span>
                        //         </span>
                        //     );
                        // }}
                        onNodeClicked={this.openUrl}
                        filterNodeMethod={(value, data) => {
                            if (!value) return true;
                            return data.title.indexOf(value) !== -1;
                        }}
                    />
                </Loading>
            </div>
        );
    }
}
