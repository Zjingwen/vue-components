<template>
    <div>
        <headers></headers>
        <contents :linkName='linkName'>
            <t-exapmple mode='horizontal' more>
                <div slot="view">
                    <t-row>
                        <t-col :span='24'>col</t-col>
                    </t-row>
                </div>
            <div slot="markdown" v-html="info"></div>
            <textarea slot="code" v-text="code"></textarea>
            </t-exapmple>
            <br/>
            <t-exapmple mode='vertical' more>
                <div slot="view">
                    <t-row>
                        <t-col :span='24'>col</t-col>
                    </t-row>
                </div>
            <div slot="markdown" v-html="info"></div>
            <textarea slot="code" v-text="code"></textarea>
            </t-exapmple>
        </contents>
        <footers></footers>
    </div>
</template>
<style lang="css"></style>
<script>
    import info from '../doc/exapmple-info.md';
    import code from '../doc/exapmple-code.md';

    export default{
        data:function(){
            return {
                linkName: '例子展示',
                info: info,
                code: code
            }
        }
    }
</script>