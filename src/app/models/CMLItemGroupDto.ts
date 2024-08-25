export interface CMLItemGroupDto {
    id: number;
    parentCMItemGroupId?: number;
    groupCode: string;
    localeCMItemGroupName: string;
    latinCMItemGroupName: string;
    cmItemGroupTreeLevel: number;
    childs: CMLItemGroupDto[];
}