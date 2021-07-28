$(function(){
    $('#container').html(`
    <div id="title">
        <img src="./../image/mini-logo.png" alt="">
        比分牌助手
    </div>
    <div id="score"></div>
    <div id="operate">
        <div id="team-score-set">
            <div id="team-score-content">
                <div class="change-score" style="margin-right: 40px;">
                    <div class="change-list">
                        <div id="left-three-plus" >+</div>
                        <span >3</span>
                        <div id="left-three-minus" >-</div>
                    </div>
                    <div class="change-list">
                        <div id="left-two-plus" >+</div>
                        <span >2</span>
                        <div id="left-two-minus" >-</div>
                    </div>
                    <div class="change-list">
                        <div id="left-one-plus" >+</div>
                        <span >1</span>
                        <div id="left-one-minus" >-</div>
                    </div>
                </div>
                <div class="team-score">
                    <p class="score-preview">
                        <span class="score-preview-hot" id="left-subtotal">0</span>
                        <input class="score-preview-input" id="left-score" type="text"
                            value="0" maxlength="3">
                    </p>
                    <p class="team-name" id="left-name">队名</p>
                    <p class="team-subtotal">
                        场记分
                        <span class="add-subtotal" id="left-subtotal-plus">+1</span>
                        <span id="left-subtotal-minus" >-1</span>
                    </p>
                </div>
                <div class="team-vs">
                    <p class="vs">VS</p>
                    <p class="scene-name">场次</p>
                </div>
                <div class="team-score">
                    <p class="score-preview">
                        <input type="text" class="score-preview-input" id="right-score"
                            value="0" maxlength="3">
                        <span class="score-preview-hot" id="right-subtotal">0</span>
                    </p>
                    <p class="team-name" id="right-name">队名</p>
                    <p class="team-subtotal team-right-subtotal">
                        <span id="right-subtotal-minus" >-1</span>
                        <span class="add-subtotal" id="right-subtotal-plus">+1</span>场记分

                    </p>
                </div>
                <div class="change-score" style="margin-left: 40px;">
                    <div class="change-list">
                        <div id="right-one-plus" >+</div>
                        <span >1</span>
                        <div id="right-one-minus" >-</div>
                    </div>

                    <div class="change-list">
                        <div id="right-two-plus" >+</div>
                        <span >2</span>
                        <div id="right-two-minus" >-</div>
                    </div>
                    <div class="change-list">
                        <div id="right-three-plus" >+</div>
                        <span >3</span>
                        <div id="right-three-minus" >-</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
})