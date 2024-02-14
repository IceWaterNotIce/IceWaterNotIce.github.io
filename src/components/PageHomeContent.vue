<template>
    <a-row :gutter="16">
        <a-col :span="8">
            <router-link to="/portfolio">
                <a-card hoverable>
                    <template #cover>
                        <img alt="Portfolio cover" src="../assets/images/portfolio_cover.jpeg" />
                    </template>
                    <a-card-meta title="Portfolio">
                        <template #description>
                            <p>projects, games, animations ...</p>
                        </template>
                    </a-card-meta>
                </a-card>
            </router-link>
        </a-col>
        <a-col :span="8">
            <router-link to="/NoteList">
                <a-card hoverable>
                    <template #cover>
                        <img alt="Notes cover" src="../assets/images/notes_cover.jpeg" />
                    </template>
                    <a-card-meta title="Notes">
                        <template #description>
                            <p>notes, thoughts, ideas ...</p>
                        </template>
                    </a-card-meta>
                </a-card>
            </router-link>
        </a-col>
        <a-col :span="8">
            <router-link to="/toolbox">
                <a-card hoverable>
                    <template #cover>
                        <img alt="Portfolio cover" src="../assets/images/toolbox_cover.jpeg" />
                    </template>
                    <a-card-meta title="toolbox">
                        <template #description>
                            <p>tools, utilities, resources ...</p>
                        </template>
                    </a-card-meta>
                </a-card>
            </router-link>
        </a-col>
    </a-row>
</template>

<script>
export default {
    name: "PageHomeContent",
    data() {
        return {};
    },
    methods: {},
    mounted() { }
};
</script>

<style lang="scss" scoped></style>