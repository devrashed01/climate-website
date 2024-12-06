type Mode = "create" | "update" | "delete";

type Locale = "en" | "sv";

type RequestOptions = {
  headers?: Record<string, string>;
};

type RequestBody = string | FormData | null;

type HttpServiceConfig = {
  getToken?: () => string | null;
  getRefreshToken?: () => string | null;
  onUpdateToken?: (token: string) => void;
  onUnAuthorized?: () => void;
  onLoading?: (status: "start" | "error" | "complete") => void;
};

interface Configuration {
  id: number;
  user_id: number;
  subscription_package_id: number;
  name: string;
  slug: string;
  title: string;
  tag_line: string;
  cover_img: string;
  thumbnail_img: string;
  vat_number: string;
  details: string;
  password_text: string;
  status: number;
  logo: string;
  helpline: string;
  website_url: string;
  fb_group_link: string;
  fb_page_link: string;
  twitter_link: string;
  instagram_link: string;
  whatsapp_link: string;
  telegram_link: string;
  primary_color: string;
  secondary_color: string;
  background_color: string;
  text_color: string;
  button_color: string;
  created_at: Date;
  updated_at: Date;
  name_en: string;
  name_bn: string;
  title_bn: string;
  title_en: string;
  tag_line_bn: string;
  tag_line_en: string;
  details_bn: string;
  details_en: string;
  cover_img_url: string;
  thumbnail_img_url: string;
  logo_url: string;
}

interface Profile {
  name: string;
}

interface DivisionResponse {
  data: {
    id: number;
    country_id: number;
    name: string;
    status: number;
  }[];
}

interface DistrictResponse {
  data: {
    id: number;
    division_id: number;
    name: string;
    lat: number | null;
    lon: number | null;
    status: number;
  }[];
}

interface ThanaResponse {
  data: {
    id: number;
    district_id: number;
    name: string;
    status: number;
  }[];
}

interface Pagination<T> {
  count: number;
  page: number;
  limit: number;
  data: T[];
}

interface Params {
  page: number | string;
  limit: number | string;
}

declare const toHexFormat: (value?: string, alpha?: boolean) => string;
declare const getHex: (value?: string, alpha?: boolean) => string;

type GradientColor = {
  color: AggregationColor;
  percent: number;
}[];

declare class AggregationColor {
  /** Original Color object */
  private metaColor;
  private colors;
  cleared: boolean;

  toHsb(): {
    b: number;
    a: number;
    h: number;
    s: number;
  };
  toHsbString(): string;
  toHex(): string;
  toHexString(): string;
  toRgb(): import("@ant-design/fast-color").RGB;
  toRgbString(): string;
  isGradient(): boolean;
  getColors(): GradientColor;
  toCssString(): string;
  equals(color: AggregationColor | null): boolean;
}
