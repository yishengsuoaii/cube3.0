$(function () {
    $('#container').html(`
    <div id="score"></div>
    <div id="control">
        <div class="half">
            <input class="score-preview-input" id="left-score" type="text" value="0" maxlength="3">
            <p class="team-name" id="left-name">队名</p>
            <p class="script">场记分</p>
            <p class="team-subtotal">
                <span id="left-subtotal-plus">+1</span>
                <span id="left-subtotal-minus" >-1</span>
            </p>
            <div class="change-score">
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
        </div>
        <div class="half">
            <input type="text" class="score-preview-input" id="right-score"value="0" maxlength="3">
            <p class="team-name" id="right-name">队名</p>
            <p class="script">场记分</p>
            <p class="team-subtotal">
                <span id="right-subtotal-minus" >-1</span>
                <span id="right-subtotal-plus">+1</span>
            </p>
            <div class="change-score">
                <div class="change-list">
                    <div id="right-one-plus" >+</div>
                    <span>1</span>
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
    `)
})