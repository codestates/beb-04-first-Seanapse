import {Description, Detail,DetailTemplate,NftImg,Properties} from '../../components/detail';


function DetailLayout() {
    return(
        <div>
            <NftImg/>
            <DetailTemplate>
                <Detail/>
            </DetailTemplate>
            <Description/>
            <Properties/>
        </div>
    )
}

export default DetailLayout;