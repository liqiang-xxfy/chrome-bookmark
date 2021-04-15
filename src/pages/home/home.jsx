import React, { Component } from 'react';
import './home.scss';
import { Tree, Input } from 'element-react';
import 'element-theme-default';
import json from '@/../public/chrome-bookmark.json';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: json,
            options: {
                children: 'children',
                label: 'title',
            },
        };
    }

    openUrl = params => {
        console.log(params);
        if (!params.url) return;
        window.open(params.url, '_blank');
    };

    render() {
        const { data, options } = this.state;
        console.log(`json`, json);
        return (
            <div className="home">
                <div className="search">
                    <Input placeholder="输入关键字进行过滤" onChange={text => this.tree.filter(text)} />
                </div>
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
            </div>
        );
    }
}
