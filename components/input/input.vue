<template>
  <div
    :class="classs"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="value"
      @input="handleInput($event.target.value)"
      @focus="handleFocus($event.target.value)"
      @click="handleClick($event.target.value)"
      @keyup.enter="handleEnter($event.target.value)"
    >
  </div>
</template>
<style src='./input.less' lang="less"></style>
<script>
import {oneOf} from '@util/assist';
const prefixCls = 't-input';

export default {
  name: prefixCls,
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large']);
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String | Number,
      default: '',
    },
    readonly: { // 只读
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
        `${prefixCls}-size-${this.size}`,
        this.disabled ? `${prefixCls}-disabled`: '',
        this.readonly ? `${prefixCls}-readonly`: '',
      ];

      return classs;
    },
  },
  methods: {
    handleInput: function(value) {
      this.currentValue = value.trim();
      this.$emit('input', value);
    },
    handleFocus: function(value) {
      this.$emit('on-focus', value);
    },
    handleClick: function(value) {
      this.$emit('on-click', value);
    },
    handleEnter: function(value) {
      this.$emit('on-enter', value);
    },
  },
};
</script>
