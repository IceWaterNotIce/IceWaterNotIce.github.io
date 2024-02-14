<!-- compress IPv6 format -->

<template>
    <div>
        <h1>PageTest</h1>
        <p></p>
    </div>
</template>

<script>

export default {
    name: 'PageTest',
    props: {
    },
    components: {
    },
    setup() {
        // get all images in the folder
        const images = require.context('@/assets/notes/', true, /\.(png|jpe?g|svg)$/).keys();
        console.log(images);
        // show all images list
        const tmepListDatas = [];
        images.map((item) => {
            const listObj = {};
            const listItemS = item.split('/');
            if (listItemS.length > 0) {
                listObj.name = listItemS[1];
                listObj.path = item;
                listObj.tags = [];
                //get name from name.xxx
                const name = listItemS[1].split('.')[0];
                //get tags from name  name_tag_tag
                const tags = name.split('_');
                if (tags.length > 1) {
                    listObj.tags = tags.slice(1);
                }
            }
            return tmepListDatas.push(listObj);
        });
        // list all images that have tags
        console.log(tmepListDatas.filter(item => item.tags.length > 0));

        // console all tags according the number to index
        const tags = {};
        tmepListDatas.map((item) => {
            item.tags.map((tag) => {
                if (tags[tag]) {
                    tags[tag] += 1;
                }
                else {
                    tags[tag] = 1;
                }
            });
        });
        console.log(tags);
        //get the first eight tags
        const tagsArray = Object.keys(tags).slice(0, 8);
        console.log(tagsArray);
        return {
        }
    }
}
</script>
