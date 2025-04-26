<script setup>
import { defineProps } from 'vue';
import StarRating from 'vue3-star-ratings';
import { CommentResponse } from '../model/comment.response';

const props = defineProps({
  comment: Object
});

const commentResponse = new CommentResponse(props.comment);
</script>

<template>
  <div class="flex items-center shadow-lg rounded-lg p-4 gap-2 min-h-40">
    <div class="bg-(--primary-color) size-15"></div>
    <div class="flex flex-col w-full p-2 gap-2 text-center md:text-start">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <span class="text-sm md:text-lg font-semibold text-(--text-color)">{{commentResponse.userUsername}}</span>
        <StarRating :model-value="commentResponse.rating" :star-color="'#fb9e49'" :inactive-color="'white'":number-of-stars="5" :star-size="20" :disable-click="true" />
      </div>
      <p class="text-sm md:text-lg text-(--text-color)">{{commentResponse.text}}</p>
    </div>
  </div>
</template>