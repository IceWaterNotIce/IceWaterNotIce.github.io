<template>
    <div id="PageTest">
        <h1>測試中</h1>
        <p>Here is the test page.</p>
    </div>

    <a-card hoverable style="width: 240px">
        <a-card-meta title="Europe Street beat">
            <template #description>www.instagram.com
                <button>test</button>
            </template>
        </a-card-meta>
    </a-card>
</template>

<script>
import { Card } from 'ant-design-vue';
export default {
    name: 'PageTest',
    props: {
    },
    components: {
        "a-card": Card,
        "a-card-meta": Card.Meta,
    },
    setup() {
        
    },
}
</script>
