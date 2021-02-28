import type { Context } from "@actions/github/lib/context";
import type { GitHub } from "@actions/github/lib/utils";
export declare const onNewIssue: ({ context, octokit, }: {
    context: Context;
    octokit: InstanceType<typeof GitHub>;
}) => Promise<void>;
