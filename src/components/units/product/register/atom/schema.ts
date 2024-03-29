import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("필수").max(20, "최대 20자까지 가능합니다."),
  option1: yup.string(),
  option2: yup.string(),
  option3: yup.string(),
  option4: yup.string(),
  option5: yup.string(),
  validFrom: yup.string().required("필수"),
  validUntil: yup.string().required("필수"),
  originPrice: yup.number().required("필수"),
  discountPrice: yup.number().required("필수"),
  originalQuantity: yup.number().required("필수"),
  youtubeLink: yup.string().required("필수"),
  content: yup.string().required("필수"),
  skin: yup.number().required(),
  info: yup.object({
    type: yup.string(),
    option1: yup.string(),
    option2: yup.string(),
    option3: yup.string(),
    option4: yup.string(),
    option5: yup.string(),
    option6: yup.string(),
    option7: yup.string(),
    option8: yup.string(),
    option9: yup.string(),
    option10: yup.string(),
    option11: yup.string(),
    option12: yup.string(),
    option13: yup.string(),
  }),
  shopName: yup.string().required("필수"),
  ceo: yup.string().required("필수"),
  brn: yup.string().required("필수"),
  mobn: yup.string().required("필수"),
});

export const updateSchema = yup.object({
  name: yup.string(),
  option1: yup.string().nullable(),
  option2: yup.string().nullable(),
  option3: yup.string().nullable(),
  option4: yup.string().nullable(),
  option5: yup.string().nullable(),
  validFrom: yup.string(),
  validUntil: yup.string(),
  originPrice: yup.number(),
  discountPrice: yup.number(),
  originalQuantity: yup.number(),
  youtubeLink: yup.string(),
  content: yup.string(),
  skin: yup.number().required(),
  info: yup.object({
    type: yup.string(),
    option1: yup.string(),
    option2: yup.string(),
    option3: yup.string(),
    option4: yup.string(),
    option5: yup.string().nullable(),
    option6: yup.string().nullable(),
    option7: yup.string().nullable(),
    option8: yup.string().nullable(),
    option9: yup.string().nullable(),
    option10: yup.string().nullable(),
    option11: yup.string().nullable(),
    option12: yup.string().nullable(),
    option13: yup.string().nullable(),
  }),
  shopName: yup.string(),
  ceo: yup.string(),
  brn: yup.string(),
  mobn: yup.string(),
});
