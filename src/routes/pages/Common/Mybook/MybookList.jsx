import React, { useState } from "react";
import { Layout } from "../../../../components/Layout/Layout";
import List from "../../../../components/List/List";


export const MybookList = ({
    mybookDatas,
}) => {

    return (
        <Layout
            type={'add'}
            title_name={'내 서재'}
            main_contents={
            <List books={ mybookDatas }/>
            }
        />
    );
};

export default MybookList;