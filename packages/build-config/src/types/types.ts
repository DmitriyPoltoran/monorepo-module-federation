export interface BuildPaths {
  entery: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export type BuildMode = "development" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
  platform: BuildPlatform;
}
