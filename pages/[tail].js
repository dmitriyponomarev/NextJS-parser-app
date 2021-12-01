import { useRouter } from 'next/dist/client/router';
import React, { memo, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { client, query } from '../graphql';

const Page = ({ data }) => {
    const router = useRouter();
    const [ currentObject, setCurrentObject ] = useState(null);

    const { tail } = router.query;

    async function getData() {
        try {
            const response = await client.request(query.getJSONIdByTail, { tail });
            const currentTail = data.find((item) => item.id === response.long_tails_by_pk.json_id)
            setCurrentObject(currentTail);
        } catch (error) {
            setCurrentObject(null);
        }
    };

    useEffect(() => {
        if (tail) getData();
    }, []);

    return (!currentObject
        ? <div>Not found</div>
        : <>
        <div>
            Title: {currentObject.title}
        </div>
        <div>
            Description: {currentObject.description}
        </div>
        </>
    )
}

Page.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        }).isRequired
    )
}

export async function getServerSideProps() {
    try {
        const response = await fetch(process.env.fileUrl);
        const data = await response.json();
        return {
            props: { data },
        }
    } catch (error) {
        return {
            props: { data: [] },
        }
    }
}

export default memo(Page);